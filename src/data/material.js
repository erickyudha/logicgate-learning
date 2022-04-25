const text1 = "Gerbang logika atau logic gates adalah proses pengolahan input bilangan biner dengan teori matematika boolean. Seperti yang kita ketahui, bilangan biner sendiri terdiri dari angka 1 dan 0." 
const text2 = `Logic gate ini direpresentasikan menggunakan tabel kebenaran. Jika memiliki nilai benar (true) akan ditunjukan dengan angka “1”. Sebaliknya, jika memiliki nilai salah (false) akan ditunjukan dengan angka “0”.`
const textA = text1 + text2;

export default [
    {
        title: "Logic Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: textA
                
            },
            {
                subtitle: "Fungsi Gerbang Logika",
                type: "text",
                content: "Gerbang logika memiliki fungsi untuk melakukan fungsi logika dasar untuk membentuk sirkuit digital yang terintegrasi. Kebanyakan logic gate menggunakan bilangan biner 0 atau 1 bisa juga disebut true atau false. Biasanya terdiri dari dua buah nilai input dan satu nilai output."
            },
            {
                subtitle: "Tabel Kebenaran",
                type: "text",
                content: "Tabel kebenaran adalah tabel yang digunakan untuk melihat nilai kebenaran dari suatu pernyataan. Di sini tabel kebenaran dapat diartikan sebagai tabel yang berisi kombinasi-kombinasi variabel masukan (input) yang menghasilkan keluaran (output) yang logis."
            },
            {
                subtitle: "Contoh Gambar",
                type: "image",
                content: "https://www.nutsvolts.com/uploads/articles/NV_0501_Byers_Large.jpg"
            },
            {
                subtitle: "Video Penjelasan",
                type: "video",
                content: "https://www.youtube.com/embed/gI-qXk7XojA"
            }
        ]
    },
    {
        title: "Top Secret",
        data: [
            {
                subtitle: " ",
                type: "video",
                content: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            }
        ]
    },
]