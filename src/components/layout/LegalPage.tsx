import { Mdx } from "@/components/mdx/Mdx";
import { Container } from "@/components/ui/Container";
import { getLegalPage, type LegalSlug } from "@/lib/legal";

export function LegalPage({ slug }: { slug: LegalSlug }) {
  const page = getLegalPage(slug);
  return (
    <article className="pt-14 pb-24 md:pt-20">
      <Container width="reading">
        <h1 className="text-h1">{page.title}</h1>
        {page.updated && <p className="mt-3 text-small text-subtle">Last updated: {page.updated}</p>}
        <div className="prose mt-10 border-t border-border pt-10">
          <Mdx source={page.body} />
        </div>
      </Container>
    </article>
  );
}
