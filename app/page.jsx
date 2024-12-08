import Script from 'next/script'

export default function Page() {
    return (
      <body className="bg-light bg-center bg-cover bg-no-repeat flex h-screen justify-center w-full">
        <div className="box-border flex flex-col justify-between py-16 text-center w-3/4">
          <div className="flex flex-row justify-items-center">
            <div className="w-1/4">
              <a href="#">Tráiler</a>
            </div>
            <div className="w-1/4">
              <a href="#">Podcast</a>
            </div>
            <div className="w-1/4">
              <a href="#">Cómic</a>
            </div>
            <div className="w-1/4">
              <a href="#">Álbum</a>
            </div>
          </div>
          <div className="flex flex-row text-center">
            <div className="w-1/3">
              <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink"></a>
            </div>
            <div className="w-1/3">
              <h1 className="font-bankGothic neonText text-center text-lg">UMBRAL</h1>
            </div>
            <div className="w-1/3">
            <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink"></a>
            </div>
          </div>
          <div className="flex flex-row text-center">
            <div className="w-1/2">
              <a className="font-bankGothic neonLink neonTextSocial text-center text-lg">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="w-1/2">
              <a className="font-bankGothic neonLink neonTextSocial text-center text-lg">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <Script src="https://kit.fontawesome.com/umbral.js" />
      </body>
    );
  }