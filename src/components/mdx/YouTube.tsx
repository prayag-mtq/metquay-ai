export function YouTube({ id, title = "YouTube video" }: { id: string; title?: string }) {
  return (
    <div className="not-prose my-8 aspect-video overflow-hidden rounded-2xl border border-border">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="size-full"
      />
    </div>
  );
}
