    
interface Order {
  id: number;
  customer: string;
  items: { productId: number; name: string; quantity: number; price: number; }[];
  status: "pending" | "shipped" | "delivered";
  date: Date;
}

const arrayPedidos = (): Order[] => {
    return [
        {
          id: 1,
          customer: "Juan Pérez",
          items: [
            { productId: 101, name: "Mouse inalámbrico", quantity: 2, price: 3500 },
            { productId: 102, name: "Teclado mecánico", quantity: 1, price: 12500 },
          ],
          status: "pending" as const,
          date: new Date("2025-09-10"),
        },
        {
          id: 2,
          customer: "María González",
          items: [
            { productId: 103, name: "Auriculares Bluetooth", quantity: 1, price: 8900 },
            { productId: 104, name: "Cargador USB-C", quantity: 3, price: 2200 },
          ],
          status: "shipped" as const,
          date: new Date("2025-09-11"),
        },
        {
          id: 3,
          customer: "Carlos López",
          items: [
            { productId: 105, name: "Monitor 24''", quantity: 1, price: 48900 },
          ],
          status: "delivered" as const,
          date: new Date("2025-09-12"),
        },
        {
          id: 4,
          customer: "Ana Torres",
          items: [
            { productId: 106, name: "Notebook 15''", quantity: 1, price: 250000 },
            { productId: 107, name: "Mochila para notebook", quantity: 1, price: 15000 },
          ],
          status: "pending" as const,
          date: new Date("2025-09-13"),
        },
        {
          id: 5,
          customer: "Pedro Sánchez",
          items: [
            { productId: 108, name: "Smartphone 128GB", quantity: 1, price: 180000 },
            { productId: 109, name: "Funda protectora", quantity: 2, price: 3500 },
          ],
          status: "shipped" as const,
          date: new Date("2025-09-14"),
        },
        {
          id: 6,
          customer: "Laura Fernández",
          items: [
            { productId: 110, name: "Tablet 10''", quantity: 1, price: 120000 },
          ],
          status: "delivered" as const,
          date: new Date("2025-09-14"),
        },
        {
          id: 7,
          customer: "Martín Herrera",
          items: [
            { productId: 111, name: "Impresora multifunción", quantity: 1, price: 65000 },
            { productId: 112, name: "Resma papel A4", quantity: 5, price: 1500 },
          ],
          status: "pending" as const,
          date: new Date("2025-09-15"),
        },
        {
          id: 8,
          customer: "Sofía Ramírez",
          items: [
            { productId: 113, name: "Consola de videojuegos", quantity: 1, price: 300000 },
            { productId: 114, name: "Mando adicional", quantity: 2, price: 25000 },
            { productId: 115, name: "Juego digital", quantity: 1, price: 8900 },
          ],
          status: "shipped" as const,
          date: new Date("2025-09-16"),
        },
        {
          id: 9,
          customer: "Diego Castro",
          items: [
            { productId: 116, name: "Cámara réflex", quantity: 1, price: 210000 },
          ],
          status: "delivered" as const,
          date: new Date("2025-09-17"),
        },
        {
          id: 10,
          customer: "Valentina Morales",
          items: [
            { productId: 117, name: "Smartwatch", quantity: 1, price: 75000 },
            { productId: 118, name: "Correa adicional", quantity: 1, price: 6000 },
          ],
          status: "pending" as const,
          date: new Date("2025-09-18"),
        },
      ];
}

export default arrayPedidos