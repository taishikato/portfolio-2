export const MyWork = async () => {
  const res = await fetch(
    "https://api.airtable.com/v0/appIrznU5cXdfKBMF/tblBRMPviarGbkF1y",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
      },
    }
  );

  const json = await res.json();

  console.log({ json });

  return (
    <div>
      <h2 className="text-secondary-foreground w-full border-b pb-3 mb-7 font-semibold">
        My Work
      </h2>
      <iframe
        src="https://airtable.com/embed/appIrznU5cXdfKBMF/shrFTwEVvE6uQpVE5?layout=card"
        width="100%"
        height="533"
        className="airtable-embed bg-transparent border rounded-lg"
      ></iframe>
    </div>
  );
};
