import RightAdBanner from './RightAdBanner';

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-80 bg-black/80 backdrop-blur-lg border-l border-pink-500/10 fixed right-0 top-16 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="relative h-full flex flex-col">
        {/* Leerer Bereich oben */}
        <div className="h-24"></div> {/* Fügt zusätzlichen Platz oben hinzu */}
        
        {/* Top Ad Banner - noch mehr Abstand nach oben */}
        <div className="sticky top-24 p-4 bg-black/80 backdrop-blur-lg z-10"> {/* top-0 zu top-32 geändert */}
          <RightAdBanner className="hidden lg:block" />
        </div>

      

        {/* Sticky Bottom Ad Banner */}
        <div className="sticky bottom-0 p-4 bg-black/80 backdrop-blur-lg">
          <RightAdBanner className="hidden lg:block" />
        </div>
      </div>
    </aside>
  );
} 