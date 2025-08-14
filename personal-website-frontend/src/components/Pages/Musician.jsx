export default function Musician() {

return (
    <>
        <div className="title">
            <h1>Musician</h1>
        </div>
        <div className="description-section">
            <p>
                As a child, I was inspired to play bass by a rousing performance of Camille Saint-Saen's The Elephant, and I have been playing ever since. 
                I studied Music Education at the University of Wisconsin-Madison under the instruction of Richard Davis, before pursuing my Master's in Music Performance from the University 
                of Arizona under the instriction of Dr. Philip Alejo.
            </p>
            <p>
                I have performed on upright and electric bass in a variety of settings and genres including clasical music, chamber music, and operas with orchestras, hip-hop, Jazz, bluegrass and more with small bands and ensembles, to musicals, marching bands, and more. 
            </p>
        </div>
        <div className="gallery-section">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                    src="/public/music-performance-photos/quintet.png"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    />

                    <img
                    src="/public/music-performance-photos/baby-liz.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="/public/music-performance-photos/liz-plays.jpeg"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                    />

                    <img
                    src="public/music-performance-photos/duo-isb.png"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                    src="/public/music-performance-photos/bme.png"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                    />

                    <img
                    src="/public/music-performance-photos/freakfest.png"
                    class="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                    />
                </div>
            </div> 
        </div>
        <div className="music-sample-section"> 
            <h2>Performance Samples:</h2>

        </div>
    </>
)
}
