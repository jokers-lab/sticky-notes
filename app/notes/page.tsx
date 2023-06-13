import React, { useState } from "react";
import Card from "./components/Card";
import Link from "next/link";

async function listNotes() {
  const response = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records"
  );
  const records = await response.json();
  return records;
}

export default async function Notes() {
  const { items } = await listNotes();

  return (
    <div className="flex flex-col w-full justify-center bg-white h-full">
      <h2 className="py-4 text-center">Notes Page</h2>
      <div className="w-full h-screen bg-yellow-50 flex flex-col justify-start gap-4 pt-8">
        {items.map((item: any) => {
          return (
            <Link href={`/notes/${item.id}`}>
              <Card
                title={item.title}
                body={item.noteBody}
                key={item.collectionId}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
