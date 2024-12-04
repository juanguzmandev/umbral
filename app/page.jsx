export default function Page() {
    return (
      <body className="bg-light bg-center bg-cover bg-no-repeat flex h-screen justify-center w-full">
        <div className="box-border flex flex-col justify-center text-center w-3/4">
          <div className="flex flex-row text-center">
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link</a>
            </div>
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link</a>
            </div>
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link 3</a>
            </div>
          </div>
          <div className="flex flex-row text-center">
            <div className="lg:py-8 py-4 w-1/3">
              <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink">Tráiler</a>
            </div>
            <div className="lg:p-8 p-4 w-1/3">
              <h1 className="font-bankGothic neonText text-center text-lg">UMBRAL</h1>
            </div>
            <div className="lg:py-8 py-4 w-1/3">
            <a href="https://youtu.be/U0i--wFqmCg" className="font-simonetta neonLink">Podcast</a>
            </div>
          </div>
          <div className="flex flex-row text-center">
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link 6</a>
            </div>
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link 7</a>
            </div>
            <div className="lg:p-8 p-4 w-1/3">
            <a href="#" className="font-simonetta neonLink">Link 8</a>
            </div>
          </div>
        </div>
      </body>
    );
  }