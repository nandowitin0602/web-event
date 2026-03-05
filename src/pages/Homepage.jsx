import { Image, SekilasAcara } from "../data";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage pt-16">
      {/* Hero */}
      <div className="container mx-auto px-2">
        <div className="hero grid md:grid-cols-2 items-center grid-cols-1 lg:pt-0 pt-16">
          <div className="text-center md:text-left lg:pb-0 pb-16">
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

          <img src={Image.HeroImage} alt="Hero Image" className="w-full md:block hidden lg:mb-0 -mb-14" />
        </div>
      </div>
      {/* Hero */}

      {/* Tentang */}
      <div className="tentang bg-stone-950 py-28">
        <div className="container mx-auto px-2">
          <h1 className="text-center text-white md:text-5xl/tight text-4xl/tight mb-6 font-semibold">
            Sekilas Tentang Acara
          </h1>
          <p className="text-center text-white/75 md:text-base/loose text-sm/loose">
            Selamat datang di Event! Acara ini adalah pertemuan para inovator, pengembang, dan pemimpin industri yang memiliki satu visi: membangun masa depan digital yang lebih cerah. Selama dua hari penuh, Anda akan berkesempatan untuk belajar langsung dari para ahli, berpartisipasi dalam sesi workshop interaktif, dan memperluas jaringan dengan sesama profesional.
          </p>

          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

            {SekilasAcara.map(acara => (
              <div key={acara.id} className="text-center bg-white p-4 rounded-lg hover:bg-indigo-900 group">
                <i className={`${acara.icon} group-hover:text-white ri-3x text-indigo-900`}></i>
                <h1 className="group-hover:text-white text-3xl font-semibold my-4">{acara.Judul}</h1>
                <p className="group-hover:text-white text-base/loose opacity-75">{acara.text}</p>
              </div>
            ))}

          </div>

          <div className="text-center mt-16">
            <Link to={"tentang-event"} className="bg-indigo-900 w-fit text-white p-3 rounded text-lg hover:bg-indigo-800">
              Lihat Selengkapnya <i className="ri-eye-fill"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Pembicara */}
      <div className="pembicara py-28">
        <div className="container mx-auto px-2">

        </div>
      </div>
      {/* Pembicara */}
    </div>
  )
}

export default Homepage