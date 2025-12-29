
async function makePostReq () {
    const res = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Next.js" }),
    });
    const data = await res.json()
    return {data}
}

export default async function FriendsPage() {
    const {data} =await makePostReq();
      return (
        <div>
          {" "}
          <h1> This is friends page, {data.message}</h1>
        </div>
      );
  }