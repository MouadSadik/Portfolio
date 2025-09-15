
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import CodeBlock from "@/components/codeBlock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type Category = {
  title: string
}

// Query with expanded fields
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  mainImage,
  publishedAt,
  body,
  categories[]->{
    title
  },
  author->{
    name,
    image
  }
}`;

const { projectId, dataset } = client.config();

//  Safe helper that always returns string | null
function urlFor(source: SanityImageSource | null | undefined): string | null {
  if (!source || !projectId || !dataset) return null;
  try {
    return imageUrlBuilder({ projectId, dataset }).image(source).url();
  } catch {
    return null;
  }
}

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  const postImageUrl = post.mainImage ? urlFor(post.mainImage) : null;

  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8 flex flex-col gap-6">

      <Button className="border w-44 rounded-full p-2" variant="ghost">
        <Link href="/blog" className="hover:underline">
          ← Back to posts
        </Link>
      </Button>

      {/* Main Image */}
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width={200}
          height={200}
          className="rounded-xl"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold">{post.title}</h1>

      {/* Metadata */}
      <div className="text-sm text-gray-500 flex flex-col gap-1">
        <div className="flex justify-between items-center mb-5">

          {post.author && (
            <span className="flex items-center gap-2">
              {post.author.image && urlFor(post.author.image) && (
                <Image
                  src={urlFor(post.author.image)!}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              By {post.author.name}
            </span>
          )}
          <span> {new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        {post.categories?.length > 0 && (
          <span>
            {post.categories.map((cat: Category) => (
              <span key={cat.title} className="mr-2">
                <Badge variant="destructive">{cat.title}</Badge>
              </span>
            ))}
          </span>
        )}

      </div>

      {/* Body */}
      <article className="prose prose-lg max-w-none">
        {Array.isArray(post.body) && (
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) =>
                  value?.asset && urlFor(value) ? (
                    <div className="flex justify-center my-7">
                      <Image
                        src={urlFor(value)!}
                        alt={value.alt || "Blog image"}
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  ) : null,

                code: ({ value }) =>
                  value?.code ? (
                    <CodeBlock code={value.code} language={value.language || "javascript"} />
                  ) : null,
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {children}
                  </a>
                ),
              },
            }}
          />
        )}
      </article>
    </main>
  );
}
