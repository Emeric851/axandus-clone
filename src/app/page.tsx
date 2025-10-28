"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
       <div className="min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#181b2d] py-4 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="https://ext.same-assets.com/2033783188/185936063.svg"
              alt="Axandus Logo"
              className="h-12 md:h-14"
            />
          </div>
          <button className="text-white text-2xl hover:text-[#ca0506] transition-colors">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20"
        style={{
          background: `linear-gradient(rgba(24, 27, 45, 0.85), rgba(24, 27, 45, 0.85)), url('https://ext.same-assets.com/2033783188/1506342101.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
        <div className="container mx-auto px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 uppercase tracking-wider drop-shadow-lg">
            L'accélérateur industriel de projets innovants
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-wide">
            La puissance d'un groupe industriel, l'agilité d'une start-up
          </p>
        </div>
      </section>

      {/* Start-up et entreprises innovantes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-w-5xl text-center">
          <p className="text-xs md:text-sm text-[#ca0506] mb-4 uppercase tracking-widest font-semibold">Axandus</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 uppercase">
            Start-up et entreprises <span className="underline decoration-[#ca0506] decoration-4 underline-offset-8">innovantes</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            L'objectif d'AXANDUS est d'accélérer le développement d'entreprises innovantes et de start-up.
            Dans toutes ses composantes, de la conception à l'industrialisation, en passant par les achats,
            le business développement, pour lui permettre d'atteindre rapidement une position concurrentielle
            forte sur son marché. Cet accompagnement permet aux entreprises de réduire le « time to market »
            du produit innovant et ainsi augmenter les chances de succès.
          </p>
        </div>
      </section>

      {/* Qu'est ce qu'un accélérateur industriel */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 uppercase">
              Qu'est ce qu'un <span className="underline decoration-[#ca0506] decoration-4 underline-offset-8">accélérateur industriel</span> ?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              D'une manière générale les incubateurs sont la première étape pour les porteurs de projets.
              Ils proposent un accompagnement de l'idée jusqu'au concept. L'accélérateur va, quant à lui,
              prendre le relai du concept jusqu'à la startup pour l'assister dans le travail de construction
              de l'offre, la connaissance des marchés, le développement du business et les premières recettes.
              L'accélérateur industriel intervient quant à lui sur le produit lui-même pour que ce dernier
              puisse être facilement fabricable en grande série, on parlera alors d'industrialisation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* L'incubateur */}
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">L'incubateur</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Avec l'incubateur, les porteurs de projets bénéficient d'un accompagnement pour les aider à
                structurer leur business plan. Ces conseils portent tant sur le choix du statut juridique,
                que les choix comptables ou marketing. En parallèle, les incubateurs accueillent les start-up
                (location de bureaux et/ou mise à disposition de locaux techniques) et organisent des rencontres
                professionnelles entre leurs partenaires et les start-up.
              </p>
            </div>

            {/* L'accélérateur */}
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">L'accélérateur</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Souvent confondu avec l'incubateur, l'accélérateur se distingue par la rapidité de son programme
                d'accompagnement et par la place qui est faite au mentorat. Une sorte de « mission commando »,
                sous forme de programmes et d'ateliers. Dans ce cas-là, la start-up existe déjà. Le programme
                est orienté principalement sur le business, avec l'objectif à la fin du programme d'avoir un
                accès démontré à des marchés et de réaliser du chiffre d'affaires.
              </p>
            </div>

            {/* L'accélérateur industriel */}
            <div className="bg-white border-4 border-[#ca0506] p-6 rounded shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">L'accélérateur industriel</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Aux côtés de l'incubateur et l'accélérateur, il y a l'accélérateur industriel. Celui-ci
                accompagne la start-up sur la définition et la réalisation de sa stratégie d'industrialisation,
                il peut également lui proposer jusqu'à une solution de production si elle le souhaite. Le
                programme d'accélération industrielle est une course de fond qui est étalée sur plusieurs
                trimestres. De la conception jusqu'à la montée en cadence du produit. Ce programme est exécuté
                par une équipe experte qui conduit et réalise les actions, ce qui permet à la start-up de
                redistribuer ses ressources et de se focaliser sur les tâches à plus haut rendement pour elle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode Axandus */}
      <section className="py-24 bg-[#ca0506] text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center uppercase">
            Méthode Axandus
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* Expertiser et concevoir */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-tight">
                Expertiser et concevoir
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                Analyse et expertise du premier niveau de maturité de votre produit. Permet d'obtenir un
                cahier des charges précis et des améliorations possibles, pour en faire un produit industriel.
              </p>
            </div>

            {/* Sourcer et approvisionner */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-tight">
                Sourcer et approvisionner
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                Réalisation de cotations afin de sourcer et approvisionner les différents composants de votre
                produit, au meilleur prix, grâce aux bases de données fournisseurs dont bénéficient les groupes
                EFI Automotive et Sercel.
              </p>
            </div>

            {/* Prototyper et valider */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-tight">
                Prototyper et valider
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                Fabrication de prototypes industriels et réalisation de tests de validation de la fonctionnalité
                du produit (conformité au cahier des charges).
              </p>
            </div>

            {/* Industrialiser et produire */}
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-6 uppercase leading-tight">
                Industrialiser et produire
              </h3>
              <p className="leading-relaxed text-sm md:text-base">
                Accompagnement dans toutes les démarches. Mise en production du produit au sein de votre structure,
                des entités EFI Automotive, ou Sercel, ou chez un fabricant tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation vidéo */}
      <section className="py-24 bg-[#ca0506]">
        <div className="container mx-auto px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center uppercase text-[#181b2d]">
            Présentation vidéo d'Axandus
          </h2>

          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-12">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/T_gzfP-U270"
              title="Clip corporate Axandus"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="text-center">
            <button className="bg-white text-[#181b2d] px-10 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors rounded shadow-lg hover:shadow-xl">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* Notre réseau */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center uppercase text-[#ca0506]">
            Notre réseau
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 max-w-6xl mx-auto items-center">
            <div className="flex items-center justify-center p-4">
              <img src="https://www.axandus.fr/wp-content/uploads/2022/04/Logo-EFI.png" alt="EFI Automotive" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://www.axandus.fr/wp-content/uploads/2022/04/Logo-EFIS.png" alt="Sercel" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://ext.same-assets.com/2033783188/2779865793.png" alt="EFI Service" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://www.axandus.fr/wp-content/uploads/2022/04/Logo-French-tech.png" alt="French Tech" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://www.axandus.fr/wp-content/uploads/2022/04/Logo-Aura.png" alt="Région AURA" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src="https://www.axandus.fr/wp-content/uploads/2022/04/Logo-Grand-Lyon.png" alt="Grand Lyon" className="w-full h-auto object-contain max-h-20 hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181b2d] text-white py-12">
        <div className="container mx-auto px-8 text-center">
          <p className="text-sm">&copy; 2024 Axandus - L'accélérateur industriel</p>
        </div>
      </footer>
    </div>
  );
}
