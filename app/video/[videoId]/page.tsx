import { youtubeData } from "@/app/db/data"

export default async function VideoPage({params}:{
  params:Promise<{videoId:string}>
}){
  const {videoId} = await params
  const id = parseInt(videoId)

  const filter = youtubeData.filter((video)=>video.id===id)

  function convertToEmbed(link: string): string {
  // Example input: "https://youtu.be/a02JAryRPVU"
  // Output: "https://www.youtube.com/embed/a02JAryRPVU"

  if (link.includes("youtu.be/")) {
    const videoId = link.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  if (link.includes("watch?v=")) {
    const videoId = link.split("watch?v=")[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return link; // return as-is if it's already in embed form
 }

  
  return <div>
    {
      filter.map((i)=>(
        <div key={i.id}>
          <iframe
          width="560"
          height="315"
          src={convertToEmbed(i.videoLink)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      ))
    }
  </div>
}