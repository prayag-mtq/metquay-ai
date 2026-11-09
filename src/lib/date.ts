const atNoonUtc = (iso: string) => new Date(`${iso}T12:00:00Z`);

export const formatDate = (iso: string) =>
  atNoonUtc(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export const rfc822 = (iso: string) => atNoonUtc(iso).toUTCString();
