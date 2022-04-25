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
                subtitle: "Gambar Gerbang Logika",
                type: "image",
                content: "https://www.nutsvolts.com/uploads/articles/NV_0501_Byers_Large.jpg"
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
                subtitle: "Gambar Tabel Kebenaran",
                type: "image",
                content: "https://www.researchgate.net/profile/Sarah-N-Chowdhury/publication/299612565/figure/tbl1/AS:668948068593682@1536501056879/Basic-Quaternary-Multi-Input-Operators-Truth-Table.png"
            },
            {
                subtitle: "Video Penjelasan",
                type: "video",
                content: "https://www.youtube.com/embed/gI-qXk7XojA"
            }
        ]
    },
    {
        title: "And Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Jenis pertama adalah gerbang AND. Gerbang AND ini memerlukan dua atau lebih input untuk menghasilkan satu output. Jika semua atau salah satu inputnya merupakan bilangan biner 0, maka outputnya akan menjadi 0. Sedangkan jika semua input adalah bilangan biner 1, maka outputnya akan menjadi 1."
            },
            {
                subtitle: "Gambar Gerbang AND",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-AND.png"
            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang AND adalah: X = A . B (Contoh: 1 . 0 = 0)"
            }
        ]
    },
    {
        title: "Or Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Jenis kedua adalah gerbang OR. Sama seperti gerbang sebelumnya, gerbang ini juga memerlukan dua input untuk menghasilkan satu output. Gerbang OR ini akan menghasilkan output 1 jika semua atau salah satu input merupakan bilangan biner 1. Sedangkan output akan menghasilkan 0 jika semua inputnya adalah bilangan biner 0."
            },
            {
                subtitle: "Gambar Gerbang OR",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-OR.png"
            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang OR adalah: X = A + B (Contoh: 1 + 0 = 1)"
            }

        ]
    },
    {
        title: "Not Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Jenis berikutnya adalah gerbang NOT. Gerbang NOT ini berfungsi sebagai pembalik keadaan. Jika input bernilai 1 maka outputnya akan bernilai 0 dan begitu juga sebaliknya."
            },
            {
                subtitle: "Gambar Gerbang NOT",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-NOT.png"
                
            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang NOT adalah: X = -A (Contoh: -1 = 0)"
            }
        ]
    },
    {
        title: "Nand Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Selanjutnya adalah gerbang NAND. Gerbang NAND ini adalah gabungan dari gerbang AND dan gerbang NOT. Karena itu output yang dihasilkan dari gerbang NAND ini adalah kebalikan dari gerbang AND."
            },
            {
                subtitle: "Gambar Gerbang NAND",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-NAND.png"

            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang NAND adalah: X = -(A . B) (Contoh: -(1 . 0) = 1)"
            }
        ]
    },
    {
        title: "Nor Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Berikutnya adalah gerbang NOR. Gerbang NOR ini adalah gabungan dari gerbang OR dan gerbang NOT. Sehingga output yang dihasilkan dari gerbang NOR ini adalah kebalikan dari gerbang OR."
            },
            {
                subtitle: "Gambar Gerbang NOR",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-NOR.png"
            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang NOR adalah: X = -(A + B) (Contoh: -(1 + 0) = 0)"
            }
        ]
    },
    {
        title: "Xor Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Jenis berikutnya adalah gerbang XOR. Gerbang XOR ini memerlukan dua input untuk menghasilkan satu output. Jika input berbeda (misalkan: input A=1, input B=0) maka output yang dihasilkan adalah bilangan biner 1. Sedangkan jika input adalah sama maka akan menghasilkan output dengan bilangan biner 0."
            
            },
            {
                subtitle: "Gambar Gerbang XOR",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-XOR.png"

            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang XOR adalah: X = A ⊕ B . (Contoh: 1 ⊕ 0 = 1)"
            }
        ]
    },
    {
        title: "Xnor Gate",
        data: [
            {
                subtitle: "Pengertian",
                type: "text",
                content: "Jenis yang terakhir adalah gerbang XNOR. Gerbang XNOR ini memerlukan dua input untuk menghasilkan satu output. Jika input berbeda (misalkan: input A=1, input B=0) maka output yang dihasilkan adalah bilangan biner 0. Sedangkan jika input adalah sama maka akan menghasilkan output dengan bilangan biner 1."
            },
            {
                subtitle: "Gambar Gerbang XNOR",
                type: "image",
                content: "https://www.dicoding.com/blog/wp-content/uploads/2021/07/Gerbang-XNOR.png"
            },
            {
                subtitle: "Persamaan Logika",
                type: "text",
                content: "Persamaan logika dari gerbang XNOR adalah: X = -(A ⊕ B) (Contoh: -(1 ⊕ 0) = 0)"
            }
        ]
    },
    {
        title: "Rangkuman",
        data: [
            {
                subtitle: "Tabel Rangkuman",
                type: "special",
                content: "https://4.bp.blogspot.com/-7Nlt1ucDCY0/V3c5LsAXCmI/AAAAAAAABg4/QsmE6n-9qzsmESiELfyOykdzp8Z0YxcRACLcB/s1600/Simbol-Gerbang-Logika%2Bdasar.gif"
            },
            {
                subtitle: "Video Rangkuman",
                type: "video",
                content: "https://www.youtube.com/embed/JQBRzsPhw2w"
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