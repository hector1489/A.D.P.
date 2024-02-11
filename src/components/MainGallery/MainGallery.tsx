import { useContext } from "react"
import { AppContext } from "../../context/GlobalContext"
import IRecord from "../../interface/IRecord"

const MainGallery = () => {
  const contextValue = useContext(AppContext)

  if (!contextValue) {
    return null
  }

  const { state } = contextValue
  const galleryData: Array<IRecord> = state.IsHero

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {galleryData.map((item) => (
        <div key={item.urlVideo} className="card w-96 bg-base-100 shadow-xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title={item.title}
              className="w-full h-full"
              src={item.urlVideo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="card-body p-4">
            <h2 className="card-title text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm mb-4">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainGallery
