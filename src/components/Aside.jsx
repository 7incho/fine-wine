import { vinos } from "../lib/data";

const primerVino = vinos.find((vino) => vino.id === "1");

const Aside = () => {
  return (
    <aside class="flex items-center">
      <aside class="flex items-center">
        {primerVino && (
          <div class="flex flex-col gap-4 p-10">
            <h2 class="font-bold text-2xl">{primerVino.nombre}</h2>
            <p class="font-thin text-xl">{primerVino.description}</p>
            <p class="font-thin text-xl">Año: {primerVino.year}</p>
            <p class="font-thin text-xl">Tipo: {primerVino.type}</p>
            <a href="#" class="h-2 w-auto">
              <button
                type="button"
                class="font-thin text-xl bg-inherit ring-red-200 hover:bg-inherit ring-1 focus:outline-none rounded-lg px-4 py-2 text-center"
              >
                Comprar
              </button>
            </a>
          </div>
        )}
      </aside>
    </aside>
  );
};

export default Aside;
