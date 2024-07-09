import Nav from "./components/Nav";
import Button from "./components/Buttons";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <section className="section1 w-screen flex items-center mb-24">
        <div className="bg-slate-200 bg-opacity-30 ml-10 rounded-md p-9 w-1/3 text-center">
          <h1 className="font-bold text-4xl mb-3">Let us find your</h1>
          <h1 className="font-bold text-red-700 text-4xl mb-3"> Forever Food.</h1>
          <p className="font-bold mb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam animi repellendus omnis dicta magni quae provident ut, nostrum, quas nam id illum ducimus placeat beatae tempora asperiores! Provident, repellat.
          </p>
          <div>
            <Button title="Search For" color="red" text="white" />
            <Button title="Find More" border="border-red-500" />
          </div>
        </div>
      </section>
      <section className="w-90vw flex justify-around p-10 mb-56">
        <div className="z-20 mt-8 h-2/3 w-1/2">
          <img src="https://th.bing.com/th/id/R.e21fbaa4f853d265bacf12a86a56df3a?rik=HSKDow7GwDx9Ig&riu=http%3a%2f%2f2.bp.blogspot.com%2f-gngSGm5OXxc%2fURSSA6EXySI%2fAAAAAAAAKkc%2fW82OY3EZuAc%2fs1600%2fmukesh%2bambani%2bhouse%2bantelina.jpg&ehk=hphm%2fzSa%2fCyG0iWOIiFb7yDKnXQkFJL3%2fsZdyVvQVPo%3d&risl=&pid=ImgRaw&r=0" className="h-full w-full" alt="" />
        </div>
        <div className="bg-slate-100 h-2/3 gap-10 w-1/2 border -ml-10 p-20 flex flex-wrap justify-center">
          <h1 className="font-bold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora cum cumque autem aliquid temporibus alias qui laborum accusamus error dolores magnam fugit quae fuga voluptates, rem maxime eveniet explicabo.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos, fugit placeat magnam officiis doloribus eum vel, repellendus, temporibus labore cum itaque tenetur dolorum!
          </p>
          <Button title="Get in Touch" color="green" text="white" />
        </div>
      </section>
      <section className="w-screen flex flex-wrap justify-evenly gap-10 mb-56">

        <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,"}/>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores,"}></Card>
         <Card text={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores,ugit placeat magnam officiis doloribus eum vel, repellendus, temporibus labore cum itaque tenetur dolorum!"}></Card>
         <Card text={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos, fugit placeat magnam officiis doloribus eum vel, repellendus, temporibus labore cum itaque tenetur dolorum!"}></Card>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,"}></Card>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,"}></Card>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae."}></Card>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,"}></Card>
         <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores, eaque ipsa accusantium omnis! Voluptates, dolores sequi error ab tenetur illo, sed enim accusamus natus nihil unde optio assumenda. Dignissimos,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam cumque tenetur libero pariatur vel magni, ullam eos soluta. Perspiciatis corrupti voluptatem recusandae blanditiis quibusdam asperiores,"}></Card>
      </section>
      <section className="w-full flex justify-center">
        <div className="w-1/2 p-6 flex flex-wrap gap-5 justify-center">
          <div className="flex w-3/4 justify-center">
            <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_0b8322f146a8cd84d3fd4f953bcd5493/enterprise-architect.png" className="h-16 w-28" alt="" />
            <h1 className="font-bold text-3xl text-blue-700 mt-2 font-serif">Logoipsum</h1>
          </div>
          <div className="w-3/4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis earum officiis praesentium eaque maxime quaerat animi perspiciatis natus saepe. Et voluptatem accusantium velit? Commodi, quos officia. Id, atque adipisci!
          </div>
          <div className="w-3/4 font-mono flex gap-6 justify-center">
            <a href="">About</a>
            <a href="">Career</a>
            <a href="">History</a>
            <a href="">Service</a>
            <a href="">Project</a>
            <a href="">Blog</a>
          </div>
          <div className="w-3/4 flex gap-3 justify-center">
            <img className="h-7 w-9" src="https://www.pngarts.com/files/16/FB-Icon-Facebook-Logo-Grey-Circle-PNG.png" alt="" />
            <img className="h-7 w-9" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise-300x300.png" alt="" />
            <img className="h-7 w-9" src="https://th.bing.com/th/id/R.7b418b95265465c6304ed0404386e011?rik=T201BtL1wsLrtg&riu=http%3a%2f%2feternal-emotion.com%2fwp-content%2fuploads%2f2018%2f05%2finstagram-icon-grey.png&ehk=4FGt5qmr1dz7yLY3ro2TbzvdvcnhMDZhQ5G8lyP3dkI%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <img className="h-7 w-9" src="https://th.bing.com/th/id/OIP.zrprNx66kA-L1iUpyZx1gwHaHa?rs=1&pid=ImgDetMain" alt="" />
            <img className="h-7 w-9" src="https://toppng.com/public/uploads/thumbnail/logo-whatsapp-png-blanco-whatsapp-icon-grey-11562899974yzrdqqnncs.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;