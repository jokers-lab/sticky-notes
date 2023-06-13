const getNoteById = async (id: string) => {
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${id}`
  );
  const record = await response.json();

  return record;
};

export default async function SinglePage({ params }: any) {
  const single = await getNoteById(params.id);
  
  return (
    <div className="w-full flex flex-col px-4 py-5">
      <h2 className="text-center text-base font-semibold">
        {single.title}
      </h2>
    </div>
  );
}
