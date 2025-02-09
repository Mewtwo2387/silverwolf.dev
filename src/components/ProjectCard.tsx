interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  hoverText: string;
  status: string;
  statusType: 'online' | 'offline' | 'discontinued';
  backgroundImage?: string;
  isInternalLink?: boolean;
}

export default function ProjectCard({
  title,
  description,
  link,
  hoverText,
  status,
  statusType,
  backgroundImage,
  isInternalLink = true
}: ProjectCardProps) {
  return (
    <div className="mx-[5%] mb-4 relative rounded-lg border-[3px] border-gray-500 border-solid
                   hover:border-purple-500 transition-all group cursor-pointer bg-black/30"
         style={{ 
           backgroundImage: backgroundImage ? 
             `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` : '',
           backgroundSize: 'contain'
         }}
         onClick={() => isInternalLink ? window.open(link) : window.location.href = link}>
      
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-2xl">{hoverText}</h3>
      </div>

      <div className="p-6">
        <h2 className="text-2xl mb-2">{title}</h2>
        <h3 className="text-[#bbbbbb] text-lg mb-2">{description}</h3>
        <div className="mt-4">
          <h4>Current Status: </h4>
          <p className={`${statusType} text-lg ml-2`}>{status}</p>
        </div>
      </div>
    </div>
  )
}