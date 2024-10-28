import React from 'react'

export default function Cards(props) {
    let searchTerm = props.searchTerm
    let isLoading = props.isLoading
    let photos = props.photos

    return (
        <main>
            <h2 className="text-center text-3xl font-extrabold text-slate-800 capitalize mb-10">
                {searchTerm} pictures
            </h2>

            {/* Solo imágenes */}
            <ul className="flex flex-wrap justify-center xs-personalizado:justify-between">
                {
                    isLoading ? (
                        <p>Cargando fotos</p>
                    ) : (
                        photos.map((photo) => (
                            <li key={photo.id} className="w-56 h-40 bg-gray-300 mb-4 overflow-hidden">
                                <img className="w-full h-full overflow-clip hover:transition-all hover:scale-125" src={photo.url} alt={photo.title} />
                            </li>
                        )
                        ))
                }
            </ul>
            {/* Fin de Solo imágenes */}
        </main>
    )
}
