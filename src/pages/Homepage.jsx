import { Image } from "../data"

const Homepage = () => {
  return (
    <div className="homepage pt-16">
      <div className="container mx-auto px-2">
        {/* Hero */}
        <div className="hero grid md:grid-cols-2 items-center grid-cols-1 lg:pt-0 pt-16">
          <div className="text-center md:text-left">
            <div className="bg-indigo-900 w-fit p-2 rounded flex items-center gap-2 mx-auto md:mx-0 mb-4">
              <img src={Image.HeroImage} alt="Hero Image" className="lg:w-10 w-7" />
              <q className="text-white lg:text-base text-xs">Membangun Masa Depan Digital, Bersama.</q>
            </div>
            <h1 className="xl:text-8xl/tight font-semibold mb-2 lg:text-7xl/tight text-6xl/tight">
              Teknologi <br /> untuk Kita.
            </h1>
            <p className="xl:text-base/loose opacity-75 text-sm/loose">
              teknologi adalah proses kreatif yang mengubah cara kita hidup, bekerja, dan berinteraksi. Ia terus berkembang, mendorong terobosan baru, dan membuka peluang tanpa batas bagi masa depan.
            </p>
            <div className="mt-6">
              <a href="#" className="bg-stone-950 w-fit text-white p-3 rounded text-lg hover:bg-stone-900">
                Lihat Jadwal Event <i className="ri-eye-fill"></i>
              </a>
            </div>
          </div>

          <img src={Image.HeroImage} alt="Hero Image" className="w-full md:block hidden" />
        </div>
        {/* Hero */}
      </div>

      {/* Tentang */}
      
      {/* Tentang */}
    </div>
  )
}

export default Homepage