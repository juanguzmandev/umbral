import Script from 'next/script'

export default function Page() {
    return (
      <body className="bg-woods brightness-125 bg-center bg-cover bg-no-repeat flex h-screen justify-center w-full">
        <div className="bg-light bg-center bg-cover bg-no-repeat box-border flex flex-col justify-between opacity-50 py-14 text-center w-full lg:flex-row lg:py-8">
          <div className="relative flex flex-row text-center px-4 lg:flex-col lg:w-1/3">
            <div className="w-1/5 lg:text-left lg:pl-8 lg:py-3">
              <a className="brightness-200 font-courier neonLink neonTextSocial !opacity-100 text-center text-white text-xs" href="https://youtu.be/pDVbg8W6teE">miniserie</a>
            </div>
            <div className="w-1/5 lg:text-left lg:pl-8 lg:py-3">
              <a className="brightness-200 font-courier neonLink neonTextSocial !opacity-100 text-center text-white text-xs" href="https://youtu.be/_sNjmxyki50">podcast</a>
            </div>
            <div className="w-1/5 lg:text-left lg:pl-8 lg:py-3">
              <a className="brightness-200 font-courier neonLink neonTextSocial !opacity-100 text-center text-white text-xs" href="https://youtu.be/jyY4fvKB6ck?si=kK_wJ8A2BDCXCeOn">trailer</a>
            </div>
            <div className="w-1/5 lg:text-left lg:pl-8 lg:py-3">
              <a className="brightness-200 font-courier neonLink neonTextSocial !opacity-100 text-center text-white text-xs" href="https://on.soundcloud.com/e5E7VaYZEyvAEors9">album</a>
            </div>
            <div className="w-1/5 lg:text-left lg:pl-8 lg:py-3">
              <a className="brightness-200 font-courier neonLink neonTextSocial !opacity-100 text-center text-white text-xs" href="https://www.canva.com/design/DAGYfbYduLg/-DuZtQtxt4z3viQZzPuVmQ/watch?utm_content=DAGYfbYduLg&utm_campaign=designshare&utm_medium=link&utm_source=editor">comic</a>
            </div>
          </div>
          <div className="flex flex-row text-center lg:items-center lg:w-1/3">
            <div className="w-1/3">
              <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink"></a>
            </div>
            <div className="w-1/3">
              <h1 className="font-bankGothic neonText !opacity-100 text-center text-2xl">UMBRAL</h1>
            </div>
            <div className="w-1/3">
            <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink"></a>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col lg:justify-end lg:items-end lg:w-1/3">
            <div className="pr-6 text-right w-1/2 lg:px-10 lg:py-2 lg:text-right">
              <a href="https://www.instagram.com/umbral.tls/" className="font-bankGothic neonLink neonTextSocial !opacity-100 text-center text-lg">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="pl-6 text-left w-1/2 lg:px-10 lg:py-2 lg:text-right">
              <a href="https://www.tiktok.com/@umbral.tls" className="font-bankGothic neonLink neonTextSocial !opacity-100 text-center text-lg">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <Script src="https://kit.fontawesome.com/75787c7f65.js" />
      </body>
    );
  }
