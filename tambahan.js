
/* =========================================================
   TAMBAHAN HALAMAN INTERAKTIF – EKSPLORASI JAKARTA
   Pasang setelah script.js pada index.html.
   Menggunakan P, go, dan struktur halaman dari script.js.
========================================================= */
(() => {
  if (typeof P === "undefined" || typeof go !== "function") {
    console.error("Tambahan halaman gagal dimuat: pastikan tambahan.js dipanggil setelah script.js.");
    return;
  }

  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[c]));

  const card = (title, body) => `
    <article class="card extra-card">
      ${title ? `<h3>${title}</h3>` : ""}
      ${body}
    </article>`;

  const heading = (title, subtitle = "") => `
    <h1 class="title">${title}</h1>
    ${subtitle ? `<p class="extra-subtitle">${subtitle}</p>` : ""}`;

  const input = (label, key, placeholder = "Tulis jawabanmu...") => `
    <label class="extra-field">
      <span>${label}</span>
      <textarea data-field="${key}" rows="2" placeholder="${placeholder}"></textarea>
    </label>`;

  const activityPage = (title, theme, html, init = null) => ({t:title, theme, html, init});

  const styles = `
  <style id="extra-learning-styles">
    .extra-card{margin:14px 0}
    .extra-subtitle{text-align:center;margin:0 0 16px;color:#34435b;font-size:14px}
    .extra-callout{background:#fff7df;border-left:5px solid #f2b632;padding:12px 14px;border-radius:12px;margin:12px 0;line-height:1.55}
    .extra-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:12px 0}
    .extra-tile{background:rgba(255,255,255,.86);border:1px solid rgba(31,42,68,.12);padding:12px;border-radius:14px;line-height:1.45}
    .extra-tile b{display:block;margin-bottom:5px}
    .extra-field{display:block;margin:10px 0;font-size:13px;font-weight:800}
    .extra-field span{display:block;margin-bottom:5px}
    .extra-field input,.extra-field textarea,.extra-field select{width:100%;border:1px solid #cbd5e1;border-radius:10px;padding:10px;background:#fff;font:inherit;color:#1f2a44}
    .extra-field textarea{resize:vertical;min-height:48px}
    .extra-action{border:0;border-radius:999px;padding:11px 16px;background:var(--acc,#f28c28);color:white;font-weight:900;cursor:pointer;margin:8px 5px 4px 0}
    .extra-action.secondary{background:#34435b}
    .extra-result{display:none;background:#e9f7ed;border:1px solid #a8d8b4;padding:12px;border-radius:12px;margin-top:12px;line-height:1.5;white-space:pre-wrap}
    .extra-result.show{display:block}
    .extra-table-wrap{overflow-x:auto;margin:12px 0}
    .extra-table{width:100%;border-collapse:collapse;background:#fff;border-radius:12px;overflow:hidden;font-size:12px}
    .extra-table th,.extra-table td{border:1px solid #d8dee8;padding:8px;text-align:left;vertical-align:top}
    .extra-table th{background:#eaf2fa}
    .extra-table textarea{width:100%;min-width:105px;border:1px solid #d3dbe6;border-radius:7px;padding:7px;font:inherit}
    .extra-choice{display:grid;gap:8px;margin:10px 0}
    .extra-choice button{border:1px solid #cbd5e1;background:#fff;color:#1f2a44;border-radius:12px;padding:10px;text-align:left;font:inherit;cursor:pointer}
    .extra-choice button.selected{border:2px solid #2e9d5b;background:#e9f7ed}
    .extra-choice button.wrong{border:2px solid #d9453d;background:#fff0ef}
    .extra-progress{height:9px;background:#e2e8f0;border-radius:20px;overflow:hidden;margin:8px 0 12px}
    .extra-progress i{display:block;height:100%;width:0;background:#2e9d5b;transition:width .2s}
    .extra-tag{display:inline-block;background:#edf2ff;border-radius:99px;padding:4px 9px;font-size:11px;font-weight:900;margin:2px}
    .extra-map{border:2px dashed #9aa9ba;border-radius:16px;padding:14px;background:#fff;text-align:center}
    .extra-map h3{margin-top:0}
    .extra-map .branch{background:#f4f7fb;border-radius:10px;padding:8px;margin:7px 0;text-align:left}
    .extra-check{display:flex;gap:8px;align-items:flex-start;margin:9px 0;font-size:13px}
    .extra-check input{margin-top:3px;accent-color:#2e9d5b}
    @media(max-width:360px){.extra-grid{grid-template-columns:1fr}.extra-table{font-size:11px}}
  </style>`;

  const pages = [];

  /* UNIT 1 – MONAS */
  pages.push(activityPage(
    "Materi: Mengenal Teks Deskripsi", "monas",
    heading("Mengenal Teks Deskripsi","Unit 1 • Monumen Nasional") +
    card("Apa itu teks deskripsi?", `
      <p>Teks deskripsi adalah teks yang menggambarkan suatu objek secara terperinci sehingga pembaca seolah-olah dapat melihat, mendengar, atau merasakan objek yang dijelaskan.</p>
      <p>Objek yang dideskripsikan dapat berupa tempat wisata, bangunan, benda, lingkungan alam, maupun suasana.</p>`) +
    `<div class="extra-grid">
      <div class="extra-tile"><b>📍 Identitas objek</b>Nama dan lokasi objek yang dibahas.</div>
      <div class="extra-tile"><b>👀 Ciri-ciri</b>Bentuk, ukuran, warna, bagian, dan keadaan objek.</div>
      <div class="extra-tile"><b>🌿 Suasana</b>Kondisi lingkungan dan kesan yang ditimbulkan.</div>
      <div class="extra-tile"><b>⭐ Keunikan</b>Hal khusus yang membedakan objek dari tempat lain.</div>
    </div>` +
    card("Ciri-ciri teks deskripsi", `
      <ol>
        <li>Menggambarkan objek secara jelas dan terperinci.</li>
        <li>Memuat informasi berdasarkan pengamatan atau sumber yang sesuai.</li>
        <li>Menggunakan kata benda dan kata sifat.</li>
        <li>Menggunakan rincian yang membantu pembaca membayangkan objek.</li>
        <li>Berfokus pada objek tertentu.</li>
      </ol>`) +
    `<div class="extra-callout">💡 Contoh: “Tugu Monas menjulang tinggi dengan lidah api berlapis emas di bagian puncaknya.” Kalimat tersebut menggambarkan bentuk dan ciri khusus Monas.</div>`
  ));

  pages.push(activityPage(
    "Aktivitas Multiliterasi: Mengamati Monas", "monas",
    heading("Ayo Mengamati Monas!","Baca, amati gambar atau model AR, lalu bandingkan informasi yang kamu temukan.") +
    card("Langkah kegiatan", `
      <ol>
        <li>Bacalah kembali teks tentang Monumen Nasional.</li>
        <li>Amati foto, video, peta lokasi, atau model tiga dimensi Monas yang ditampilkan guru.</li>
        <li>Perhatikan bentuk tugu, bagian puncak, lingkungan taman, dan bangunan di sekitarnya.</li>
        <li>Catat informasi dari bacaan dan hasil pengamatan visual.</li>
        <li>Bandingkan informasi tertulis dengan informasi visual.</li>
      </ol>`) +
    card("Tabel hasil pengamatan", `
      <p>Isi kedua kolom berdasarkan teks dan media visual yang kamu amati.</p>
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Aspek</th><th>Informasi dari teks</th><th>Informasi dari gambar/AR</th></tr></thead>
        <tbody>${["Lokasi","Bentuk bangunan","Bagian puncak","Lingkungan sekitar","Daya tarik wisata"].map((x,i)=>`
          <tr><td>${x}</td><td><textarea data-monas-text="${i}" placeholder="Dari bacaan..."></textarea></td><td><textarea data-monas-visual="${i}" placeholder="Dari gambar/AR..."></textarea></td></tr>`).join("")}
        </tbody>
      </table></div>
      <button class="extra-action" id="monasCompare">Simpan hasil pengamatan</button>
      <div class="extra-result" id="monasResult"></div>`) +
    card("Diskusikan bersama teman", `
      ${input("1. Informasi apa yang kamu peroleh dari teks?","m1")}
      ${input("2. Informasi apa yang lebih mudah dipahami melalui gambar atau AR?","m2")}
      ${input("3. Apakah model AR membantu membayangkan bentuk Monas? Jelaskan.","m3")}
      ${input("4. Mengapa membaca teks dan mengamati media visual memberikan pemahaman lebih lengkap?","m4")}
      <button class="extra-action" id="monasDiscuss">Lihat rangkuman diskusi</button>
      <div class="extra-result" id="monasDiscussResult"></div>`)
    , () => {
      const collect = sel => [...document.querySelectorAll(sel)].map(x=>x.value.trim());
      document.getElementById("monasCompare")?.addEventListener("click",()=>{
        const a=collect("[data-monas-text]"), b=collect("[data-monas-visual]");
        const lines=["HASIL PENGAMATAN MONAS",...["Lokasi","Bentuk bangunan","Bagian puncak","Lingkungan sekitar","Daya tarik wisata"].map((k,i)=>`${k}\nTeks: ${a[i]||"-"}\nVisual/AR: ${b[i]||"-"}`)];
        const box=document.getElementById("monasResult");box.textContent=lines.join("\n\n");box.classList.add("show");
      });
      document.getElementById("monasDiscuss")?.addEventListener("click",()=>{
        const vals=["m1","m2","m3","m4"].map((k,i)=>`${i+1}. ${document.querySelector(`[data-field="${k}"]`)?.value||"(belum diisi)"}`);
        const box=document.getElementById("monasDiscussResult");box.textContent=vals.join("\n\n");box.classList.add("show");
      });
    }
  ));

  /* UNIT 2 – KOTA TUA & TMII */
  pages.push(activityPage(
    "Materi: Menemukan Informasi dalam Teks", "tua",
    heading("Menemukan Informasi dalam Teks","Unit 2 • Kota Tua Jakarta dan TMII") +
    card("Informasi tersurat",`<p>Informasi tersurat adalah informasi yang disampaikan secara langsung dan dapat ditemukan dengan membaca bagian teks yang berkaitan.</p><p><b>Contoh:</b> “Kota Tua Jakarta berada di Jakarta Barat.” Informasi lokasi disampaikan secara langsung.</p>`) +
    card("Informasi tersirat",`<p>Informasi tersirat tidak selalu dituliskan secara langsung. Pembaca perlu menghubungkan beberapa informasi dan menarik kesimpulan.</p><p><b>Contoh:</b> Jika teks menjelaskan bangunan lama, museum, dan peninggalan Batavia, pembaca dapat menyimpulkan bahwa Kota Tua memiliki nilai sejarah.</p>`) +
    card("Ide pokok dan simpulan",`
      <ul><li><b>Ide pokok:</b> gagasan utama yang menjadi inti pembahasan paragraf.</li>
      <li><b>Simpulan:</b> pernyataan ringkas yang merangkum informasi penting dari bacaan.</li></ul>`) +
    `<div class="extra-callout">Tips membaca: tandai nama tempat, lokasi, ciri-ciri, kegiatan, daya tarik, dan pesan penulis. Setelah itu, hubungkan informasi yang saling berkaitan.</div>`
  ));

  pages.push(activityPage(
    "Aktivitas Multiliterasi: Membandingkan Kota Tua dan TMII", "tua",
    heading("Ayo Membandingkan Wisata Jakarta!","Gunakan informasi dari teks dan gambar/video untuk menemukan persamaan dan perbedaan.") +
    card("Langkah kegiatan",`
      <ol><li>Bacalah kembali teks Kota Tua Jakarta dan TMII.</li><li>Amati gambar atau video kedua tempat wisata.</li><li>Perhatikan lokasi, bangunan, suasana, dan daya tariknya.</li><li>Catat informasi penting dari masing-masing teks.</li><li>Bandingkan persamaan dan perbedaannya.</li><li>Diskusikan hasilnya bersama teman.</li></ol>`) +
    card("Tabel perbandingan interaktif",`
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Aspek</th><th>Kota Tua Jakarta</th><th>TMII</th></tr></thead>
        <tbody>${["Lokasi","Daya tarik utama","Ciri-ciri bangunan","Informasi yang diperoleh","Kegiatan pengunjung","Nilai pendidikan"].map((x,i)=>`
        <tr><td>${x}</td><td><textarea data-compare-a="${i}" placeholder="Isi informasi..."></textarea></td><td><textarea data-compare-b="${i}" placeholder="Isi informasi..."></textarea></td></tr>`).join("")}</tbody>
      </table></div>
      <button class="extra-action" id="compareSave">Simpan perbandingan</button><div class="extra-result" id="compareResult"></div>`) +
    card("Cek pemahaman",`
      <div class="extra-choice" id="compareQuiz">
        <p><b>1. Tempat wisata mana yang lebih tepat untuk mempelajari sejarah Jakarta?</b></p>
        <button data-answer="a">Kota Tua Jakarta</button><button data-answer="b">TMII</button>
        <p><b>2. Tempat wisata mana yang lebih tepat untuk mengenal rumah adat dan budaya daerah?</b></p>
        <button data-answer="c">Kota Tua Jakarta</button><button data-answer="d">TMII</button>
      </div><div class="extra-result" id="compareFeedback"></div>`) +
    card("Tantangan membaca",`
      ${input("Menurutmu, apa persamaan kedua tempat wisata tersebut?","same")}
      ${input("Apa perbedaan daya tarik utama keduanya?","diff")}
      ${input("Jika berkunjung bersama teman sekolah, mana yang kamu pilih? Mengapa?","choice")}
      <button class="extra-action" id="compareReflect">Tampilkan jawaban</button><div class="extra-result" id="compareReflectResult"></div>`)
    , () => {
      document.getElementById("compareSave")?.addEventListener("click",()=>{
        const rows=["Lokasi","Daya tarik utama","Ciri-ciri bangunan","Informasi yang diperoleh","Kegiatan pengunjung","Nilai pendidikan"];
        const out=rows.map((x,i)=>`${x}\nKota Tua: ${document.querySelector(`[data-compare-a="${i}"]`).value||"-"}\nTMII: ${document.querySelector(`[data-compare-b="${i}"]`).value||"-"}`);
        const box=document.getElementById("compareResult");box.textContent=out.join("\n\n");box.classList.add("show");
      });
      const q=document.getElementById("compareQuiz");
      q?.addEventListener("click",e=>{
        const b=e.target.closest("button");if(!b)return;
        const correct=["a","d"].includes(b.dataset.answer);
        b.classList.add(correct?"selected":"wrong");
        const box=document.getElementById("compareFeedback");box.textContent=correct?"Tepat! Pilihanmu sesuai dengan informasi pada bahan bacaan.":"Coba baca kembali informasi tentang daya tarik Kota Tua dan TMII.";
        box.classList.add("show");
      });
      document.getElementById("compareReflect")?.addEventListener("click",()=>{
        const keys=["same","diff","choice"];const box=document.getElementById("compareReflectResult");
        box.textContent=keys.map((k,i)=>`${i+1}. ${document.querySelector(`[data-field="${k}"]`).value||"(belum diisi)"}`).join("\n\n");box.classList.add("show");
      });
    }
  ));

  /* UNIT 3 – MANGROVE */
  pages.push(activityPage(
    "Materi: Struktur Teks Deskripsi", "mangrove",
    heading("Mengenali Struktur Teks Deskripsi","Unit 3 • Hutan Mangrove Angke Kapuk") +
    `<div class="extra-grid">
      <div class="extra-tile"><b>1. Identifikasi</b>Bagian yang memperkenalkan objek, nama, dan gambaran umum objek.</div>
      <div class="extra-tile"><b>2. Deskripsi bagian</b>Bagian yang menjelaskan ciri-ciri objek secara terperinci.</div>
      <div class="extra-tile"><b>3. Penutup/kesan</b>Bagian yang berisi simpulan, tanggapan, kesan, atau pesan.</div>
    </div>` +
    card("Contoh sederhana",`
      <p><b>Identifikasi:</b> Hutan Mangrove Angke Kapuk merupakan kawasan wisata alam di Jakarta Utara.</p>
      <p><b>Deskripsi bagian:</b> Pepohonan mangrove tumbuh rapat. Daunnya hijau dan akarnya menjulur dari permukaan lumpur.</p>
      <p><b>Penutup:</b> Pengunjung perlu menjaga kebersihan dan kelestarian kawasan mangrove.</p>`) +
    card("Unsur kebahasaan",`
      <ul><li><b>Kata benda:</b> menyebutkan objek, misalnya pohon, akar, daun, jalur kayu.</li>
      <li><b>Kata sifat:</b> menjelaskan keadaan atau ciri, misalnya hijau, rapat, teduh, berlumpur.</li>
      <li><b>Kata lokasi:</b> menunjukkan letak, misalnya di Jakarta Utara, di pesisir, di antara pepohonan.</li>
      <li><b>Kalimat perincian:</b> menjelaskan bagian atau ciri objek secara lebih khusus.</li></ul>`)
  ));

  pages.push(activityPage(
    "Aktivitas Multiliterasi: Analisis Teks Mangrove", "mangrove",
    heading("Ayo Mengenali Struktur dan Unsur Kebahasaan!","Amati dua bacaan dan gambar kawasan mangrove, lalu temukan cara objek dideskripsikan.") +
    card("Langkah kegiatan",`
      <ol><li>Bacalah kembali teks Hutan Mangrove Angke Kapuk dan Taman Wisata Alam Mangrove Angke Kapuk.</li><li>Amati gambar yang ditampilkan guru.</li><li>Temukan bagian yang memperkenalkan objek.</li><li>Identifikasi paragraf yang menjelaskan ciri objek secara terperinci.</li><li>Temukan bagian penutup atau kesan.</li><li>Catat kata benda, kata sifat, kata lokasi, dan kalimat perincian.</li><li>Diskusikan hasil analisis bersama teman.</li></ol>`) +
    card("Tabel analisis struktur",`
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Struktur</th><th>Hutan Mangrove Angke Kapuk</th><th>Taman Wisata Alam Mangrove</th></tr></thead>
        <tbody>${["Identifikasi","Deskripsi bagian","Penutup/kesan"].map((x,i)=>`<tr><td>${x}</td><td><textarea data-structure-a="${i}" placeholder="Temukan kalimat..."></textarea></td><td><textarea data-structure-b="${i}" placeholder="Temukan kalimat..."></textarea></td></tr>`).join("")}</tbody>
      </table></div>`) +
    card("Tabel analisis unsur kebahasaan",`
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Unsur</th><th>Contoh teks pertama</th><th>Contoh teks kedua</th></tr></thead>
        <tbody>${["Kata benda","Kata sifat","Kata yang menunjukkan lokasi","Kalimat perincian"].map((x,i)=>`<tr><td>${x}</td><td><textarea data-language-a="${i}" placeholder="Contoh..."></textarea></td><td><textarea data-language-b="${i}" placeholder="Contoh..."></textarea></td></tr>`).join("")}</tbody>
      </table></div>
      <button class="extra-action" id="mangroveSave">Simpan hasil analisis</button><div class="extra-result" id="mangroveResult"></div>`) +
    card("Diskusikan bersama teman",`
      ${input("Apa persamaan struktur kedua teks deskripsi?","mg1")}
      ${input("Mengapa deskripsi bagian penting dalam teks deskripsi?","mg2")}
      ${input("Bagaimana kata lokasi membantu pembaca memahami objek?","mg3")}
      ${input("Bagaimana gambar membantu menemukan ciri objek?","mg4")}
      <button class="extra-action" id="mangroveDiscuss">Tampilkan hasil diskusi</button><div class="extra-result" id="mangroveDiscussResult"></div>`) +
    card("Tantangan membaca",`
      <p>Pilih satu objek pada gambar kawasan mangrove. Buat peta pikiran sederhana berisi nama objek, lokasi, ciri-ciri, kata benda, kata sifat, dan satu kalimat perincian.</p>
      ${input("Nama objek dan lokasi","mgObj")}
      ${input("Ciri-ciri objek yang diamati","mgFeatures")}
      ${input("Kata benda dan kata sifat yang sesuai","mgWords")}
      ${input("Kalimat perincian tentang objek","mgSentence")}
      <button class="extra-action" id="mangroveMap">Buat peta pikiran</button><div class="extra-result" id="mangroveMapResult"></div>`)
    , () => {
      document.getElementById("mangroveSave")?.addEventListener("click",()=>{
        const groups=[["STRUKTUR",["Identifikasi","Deskripsi bagian","Penutup/kesan"],"structure"],["UNSUR KEBAHASAAN",["Kata benda","Kata sifat","Kata lokasi","Kalimat perincian"],"language"]];
        const out=[];
        groups.forEach(([title,labels,prefix])=>{
          out.push(title);
          labels.forEach((x,i)=>out.push(`${x}\nTeks 1: ${document.querySelector(`[data-${prefix}-a="${i}"]`).value||"-"}\nTeks 2: ${document.querySelector(`[data-${prefix}-b="${i}"]`).value||"-"}`));
        });
        const box=document.getElementById("mangroveResult");box.textContent=out.join("\n\n");box.classList.add("show");
      });
      document.getElementById("mangroveDiscuss")?.addEventListener("click",()=>{
        const keys=["mg1","mg2","mg3","mg4"];const box=document.getElementById("mangroveDiscussResult");
        box.textContent=keys.map((k,i)=>`${i+1}. ${document.querySelector(`[data-field="${k}"]`).value||"-"}`).join("\n\n");box.classList.add("show");
      });
      document.getElementById("mangroveMap")?.addEventListener("click",()=>{
        const keys=["mgObj","mgFeatures","mgWords","mgSentence"];const labels=["Objek dan lokasi","Ciri-ciri","Kata benda dan kata sifat","Kalimat perincian"];
        const box=document.getElementById("mangroveMapResult");
        box.textContent=labels.map((l,i)=>`${l}: ${document.querySelector(`[data-field="${keys[i]}"]`).value||"-"}`).join("\n\n");box.classList.add("show");
      });
    }
  ));

  /* UNIT 4 – ANCOL / AR */
  pages.push(activityPage(
    "Materi: Mengenal Augmented Reality", "ancol",
    heading("Mengenal Augmented Reality (AR)","Unit 4 • Pantai Ancol") +
    card("Apa itu AR?",`<p>Augmented Reality (AR) adalah teknologi yang menggabungkan objek digital dengan lingkungan nyata. Melalui perangkat seperti telepon pintar atau tablet, pengguna dapat melihat objek digital pada layar seolah-olah hadir di lingkungan sekitarnya.</p>`) +
    card("Manfaat AR dalam pembelajaran",`
      <ul><li>Membantu mengamati bentuk dan bagian objek.</li><li>Memberikan pengalaman visual yang lebih interaktif.</li><li>Membantu menghubungkan informasi tertulis dengan tampilan visual.</li><li>Mendorong kegiatan mengamati, mencatat, dan berdiskusi.</li></ul>`) +
    card("Langkah menggunakan media AR",`
      <ol><li>Siapkan telepon pintar atau tablet.</li><li>Buka tautan atau penanda AR yang disediakan guru.</li><li>Izinkan akses kamera jika diminta.</li><li>Arahkan perangkat sesuai petunjuk.</li><li>Amati objek yang muncul pada layar.</li><li>Catat bentuk, warna, bagian, dan keadaan lingkungan yang terlihat.</li><li>Hubungkan hasil pengamatan dengan informasi dalam teks.</li></ol>`) +
    `<div class="extra-callout">Catatan: tampilan AR bergantung pada perangkat, koneksi internet, dan tautan/model yang disediakan. Jika AR tidak dapat dibuka, gunakan gambar atau video pengganti dari guru.</div>`
  ));

  pages.push(activityPage(
    "Aktivitas Multiliterasi: Pengamatan AR Pantai Ancol", "ancol",
    heading("Ayo Mengamati Pantai Ancol!","Hubungkan informasi dalam bacaan dengan objek visual yang kamu amati.") +
    card("Langkah pengamatan",`
      <ol><li>Bacalah kembali teks Pantai Ancol.</li><li>Siapkan telepon pintar atau tablet.</li><li>Buka tautan AR yang disediakan guru.</li><li>Arahkan kamera sesuai petunjuk.</li><li>Amati bentuk garis pantai, permukaan air, suasana sekitar, dan objek lainnya.</li><li>Catat informasi yang sesuai dengan bacaan.</li><li>Diskusikan hasil pengamatan bersama teman.</li></ol>
      <a class="ar" href="https://asbir.com/o1PX4F1" target="_blank" rel="noopener">📱 Buka Objek AR Pantai Ancol</a>
      <a class="ar" href="https://youtu.be/K6Z3wNECu9s" target="_blank" rel="noopener">▶️ Tonton Video Pendukung</a>`) +
    card("Tabel hasil pengamatan AR",`
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Aspek yang diamati</th><th>Hasil pengamatan</th></tr></thead>
        <tbody>${["Nama objek","Bentuk garis pantai","Keadaan permukaan air","Warna yang terlihat","Keadaan lingkungan sekitar","Aktivitas yang terlihat","Ciri khas objek"].map((x,i)=>`<tr><td>${x}</td><td><textarea data-ancol-observe="${i}" placeholder="Tulis hasil pengamatan..."></textarea></td></tr>`).join("")}</tbody>
      </table></div>`) +
    card("Menghubungkan informasi teks dan visual",`
      <div class="extra-table-wrap"><table class="extra-table">
        <thead><tr><th>Informasi dalam teks</th><th>Hasil pengamatan melalui AR</th></tr></thead>
        <tbody>${["Kawasan Ancol berada di tepi laut.","Pantai memiliki pemandangan perairan terbuka.","Langit dapat berubah warna menjelang matahari terbenam.","Pengunjung dapat berjalan santai di sekitar pantai."].map((x,i)=>`<tr><td>${x}</td><td><textarea data-ancol-link="${i}" placeholder="Apa yang kamu amati?"></textarea></td></tr>`).join("")}</tbody>
      </table></div>
      <button class="extra-action" id="ancolSave">Simpan hasil pengamatan</button><div class="extra-result" id="ancolResult"></div>`) +
    card("Diskusikan bersama teman",`
      ${input("1. Apakah seluruh informasi dalam teks dapat diamati melalui AR?","an1")}
      ${input("2. Informasi visual apa yang tidak dijelaskan secara langsung dalam teks?","an2")}
      ${input("3. Bagaimana AR membantu membayangkan keadaan Pantai Ancol?","an3")}
      <button class="extra-action" id="ancolDiscuss">Tampilkan hasil diskusi</button><div class="extra-result" id="ancolDiscussResult"></div>`)
    , () => {
      document.getElementById("ancolSave")?.addEventListener("click",()=>{
        const a=["Nama objek","Bentuk garis pantai","Keadaan permukaan air","Warna yang terlihat","Keadaan lingkungan sekitar","Aktivitas yang terlihat","Ciri khas objek"];
        const b=["Kawasan Ancol berada di tepi laut.","Pantai memiliki pemandangan perairan terbuka.","Langit dapat berubah warna menjelang matahari terbenam.","Pengunjung dapat berjalan santai di sekitar pantai."];
        const out=["HASIL PENGAMATAN AR",...a.map((x,i)=>`${x}: ${document.querySelector(`[data-ancol-observe="${i}"]`).value||"-"}`),"\nHUBUNGAN TEKS DAN VISUAL",...b.map((x,i)=>`${x}\nHasil AR: ${document.querySelector(`[data-ancol-link="${i}"]`).value||"-"}`)];
        const box=document.getElementById("ancolResult");box.textContent=out.join("\n");box.classList.add("show");
      });
      document.getElementById("ancolDiscuss")?.addEventListener("click",()=>{
        const keys=["an1","an2","an3"];const box=document.getElementById("ancolDiscussResult");
        box.textContent=keys.map((k,i)=>`${i+1}. ${document.querySelector(`[data-field="${k}"]`).value||"-"}`).join("\n\n");box.classList.add("show");
      });
    }
  ));

  /* AKTIVITAS AKHIR – PETA INFORMASI LINTAS UNIT */
  pages.push(activityPage(
    "Aktivitas Multiliterasi: Peta Informasi Wisata Jakarta", "ancol",
    heading("Ayo Membuat Peta Informasi Wisata Jakarta!","Aktivitas kelompok • 3–4 orang • Presentasi 2–3 menit") +
    card("Langkah kegiatan",`
      <ol><li>Bentuklah kelompok yang terdiri atas 3–4 orang.</li><li>Pilih satu tempat wisata Jakarta yang telah dipelajari pada Unit 1–4.</li><li>Bacalah kembali teks yang berkaitan dengan tempat tersebut.</li><li>Amati gambar, video, atau objek AR yang tersedia.</li><li>Catat nama tempat, lokasi, ciri-ciri, daya tarik, dan informasi penting lainnya.</li><li>Susun informasi tersebut dalam bentuk peta informasi.</li><li>Tambahkan gambar atau hasil pengamatan AR apabila tersedia.</li><li>Presentasikan hasil pekerjaan kelompok selama 2–3 menit.</li></ol>`) +
    card("Isi peta informasi",`
      <label class="extra-field"><span>Tempat wisata pilihan</span><select id="mapPlace"><option>Monumen Nasional (Monas)</option><option>Kota Tua Jakarta</option><option>Taman Mini Indonesia Indah (TMII)</option><option>Hutan Mangrove Angke Kapuk</option><option>Pantai Ancol</option></select></label>
      ${input("Lokasi","mapLocation")}
      ${input("Tiga ciri utama","mapFeatures")}
      ${input("Daya tarik wisata","mapAttraction")}
      ${input("Kegiatan pengunjung","mapActivities")}
      ${input("Informasi baru dari gambar/video/AR","mapVisual")}
      ${input("Aturan menjaga tempat wisata","mapCare")}
      <button class="extra-action" id="makeMap">Buat peta informasi</button>`) +
    `<div class="extra-result" id="mapPreview"></div>` +
    card("Panduan presentasi",`
      <ol><li>Nama dan lokasi tempat wisata.</li><li>Gambaran umum tempat wisata.</li><li>Ciri-ciri objek berdasarkan bacaan dan pengamatan visual.</li><li>Daya tarik tempat wisata.</li><li>Informasi baru dari media visual atau AR.</li><li>Cara menjaga kebersihan dan kelestarian tempat wisata.</li></ol>`) +
    card("Tantangan literasi: tulis paragraf deskripsi",`
      <p>Buat satu paragraf deskripsi berdasarkan hasil membaca dan pengamatan.</p>
      <ul><li>Terdiri atas 5–7 kalimat.</li><li>Memuat nama dan lokasi objek.</li><li>Menjelaskan sekurang-kurangnya tiga ciri objek.</li><li>Menggunakan kata benda dan kata sifat yang sesuai.</li><li>Memuat informasi dari bacaan dan pengamatan.</li><li>Menggunakan kalimat yang jelas dan mudah dipahami.</li></ul>
      <textarea id="mapParagraph" rows="7" placeholder="Tuliskan paragraf deskripsimu di sini..." style="width:100%;border:1px solid #cbd5e1;border-radius:10px;padding:10px;font:inherit"></textarea>
      <p id="mapWordCount" class="extra-subtitle">0 kalimat</p>`)
    , () => {
      const keys=["mapLocation","mapFeatures","mapAttraction","mapActivities","mapVisual","mapCare"];
      const labels=["Lokasi","Tiga ciri utama","Daya tarik wisata","Kegiatan pengunjung","Informasi baru dari media visual/AR","Aturan menjaga tempat wisata"];
      document.getElementById("makeMap")?.addEventListener("click",()=>{
        const place=document.getElementById("mapPlace").value;
        const vals=keys.map(k=>document.querySelector(`[data-field="${k}"]`).value.trim());
        const box=document.getElementById("mapPreview");
        box.innerHTML=`<div class="extra-map"><span class="extra-tag">PETA INFORMASI WISATA</span><h3>${esc(place)}</h3>${labels.map((l,i)=>`<div class="branch"><b>${esc(l)}</b><br>${esc(vals[i]||"Belum diisi")}</div>`).join("")}</div>`;
        box.classList.add("show");
      });
      const para=document.getElementById("mapParagraph");
      para?.addEventListener("input",()=>{
        const n=(para.value.match(/[^.!?]+[.!?]+/g)||[]).length;
        document.getElementById("mapWordCount").textContent=`${n} kalimat${n>=5&&n<=7?" – jumlah sudah sesuai":n<5?" – minimal 5 kalimat":" – maksimal 7 kalimat"}`;
      });
    }
  ));

  /* REFLEKSI PER UNIT */
  const reflections = [
    ["Refleksi Unit 1 – Monas","monas",[
      "Saya dapat menjelaskan pengertian teks deskripsi.",
      "Saya dapat menyebutkan ciri-ciri teks deskripsi.",
      "Saya dapat menemukan informasi penting dalam bacaan tentang Monas.",
      "Saya dapat menjelaskan ciri-ciri Monas berdasarkan teks.",
      "Saya dapat menghubungkan informasi tertulis dengan gambar atau AR."
    ]],
    ["Refleksi Unit 2 – Kota Tua dan TMII","tua",[
      "Saya dapat menemukan informasi tersurat dalam teks.",
      "Saya dapat memahami informasi tersirat berdasarkan isi bacaan.",
      "Saya dapat menentukan ide pokok dan membuat simpulan.",
      "Saya dapat membandingkan informasi Kota Tua dan TMII.",
      "Saya dapat menghubungkan informasi bacaan dengan gambar atau video."
    ]],
    ["Refleksi Unit 3 – Hutan Mangrove","mangrove",[
      "Saya dapat menjelaskan struktur teks deskripsi.",
      "Saya dapat membedakan identifikasi, deskripsi bagian, dan penutup.",
      "Saya dapat menemukan kata benda dan kata sifat.",
      "Saya dapat menemukan kata yang menunjukkan lokasi dan kalimat perincian.",
      "Saya dapat menganalisis struktur teks berdasarkan bacaan dan gambar."
    ]],
    ["Refleksi Unit 4 – Pantai Ancol","ancol",[
      "Saya dapat menemukan informasi penting dalam teks Pantai Ancol.",
      "Saya dapat menjelaskan pengertian dan manfaat AR.",
      "Saya dapat memahami informasi melalui tampilan visual atau AR.",
      "Saya dapat menghubungkan informasi tertulis dengan hasil pengamatan.",
      "Saya dapat menyusun peta informasi dan paragraf deskripsi."
    ]]
  ];

  reflections.forEach(([title,theme,items],idx)=>{
    pages.push(activityPage(title,theme,
      heading(title,"Centang pernyataan sesuai kemampuanmu setelah menyelesaikan unit.") +
      card("Cek pemahaman diri",items.map((x,i)=>`
        <label class="extra-check"><input type="checkbox" data-reflect="${idx}-${i}"><span>${x}</span></label>`).join("") +
        `<div class="extra-progress"><i id="reflectBar${idx}"></i></div>
         <p id="reflectText${idx}">0 dari ${items.length} kemampuan tercapai.</p>
         <div class="extra-result" id="reflectMessage${idx}"></div>`)
    ,()=>{
      const checks=[...document.querySelectorAll(`[data-reflect^="${idx}-"]`)];
      const update=()=>{
        const n=checks.filter(c=>c.checked).length,p=Math.round(n/checks.length*100);
        document.getElementById(`reflectBar${idx}`).style.width=p+"%";
        document.getElementById(`reflectText${idx}`).textContent=`${n} dari ${checks.length} kemampuan tercapai (${p}%).`;
        const msg=document.getElementById(`reflectMessage${idx}`);
        msg.textContent=p===100?"Hebat! Kamu sudah mencentang seluruh kemampuan pada unit ini.":p>=60?"Bagus! Pelajari kembali bagian yang belum kamu kuasai.":"Ayo ulangi materi dan aktivitas pada unit ini.";
        msg.classList.add("show");
      };
      checks.forEach(c=>c.addEventListener("change",update));
    }));
  });

/* =========================================================
   SUSUN HALAMAN TAMBAHAN BERDASARKAN KELOMPOK UNIT
========================================================= */

// Mengambil halaman tambahan berdasarkan judulnya.
const ambilHalaman = (prefix) =>
  pages.filter(p => p.t.startsWith(prefix));

// Halaman untuk setiap unit.
const tambahanUnit1 = [
  ...ambilHalaman("Materi: Mengenal Teks Deskripsi"),
  ...ambilHalaman("Aktivitas Multiliterasi: Mengamati Monas"),
  ...ambilHalaman("Refleksi Unit 1")
];

const tambahanUnit2 = [
  ...ambilHalaman("Materi: Menemukan Informasi dalam Teks"),
  ...ambilHalaman("Aktivitas Multiliterasi: Membandingkan Kota Tua"),
  ...ambilHalaman("Refleksi Unit 2")
];

const tambahanUnit3 = [
  ...ambilHalaman("Materi: Struktur Teks Deskripsi"),
  ...ambilHalaman("Aktivitas Multiliterasi: Analisis Teks Mangrove"),
  ...ambilHalaman("Refleksi Unit 3")
];

const tambahanUnit4 = [
  ...ambilHalaman("Materi: Mengenal Augmented Reality"),
  ...ambilHalaman("Aktivitas Multiliterasi: Pengamatan AR Pantai Ancol"),
  ...ambilHalaman("Refleksi Unit 4")
];

const aktivitasAkhir = [
  ...ambilHalaman("Aktivitas Multiliterasi: Peta Informasi")
];

// Cari posisi awal setiap unit pada materi asli.
const posisiUnit2 = P.findIndex(p => p.t.startsWith("Unit 2 –"));
const posisiUnit3 = P.findIndex(p => p.t.startsWith("Unit 3 –"));
const posisiUnit4 = P.findIndex(p => p.t.startsWith("Unit 4 –"));
const posisiRuangMenulis = P.findIndex(p => p.t === "Ruang Menulis");

// Sisipkan dari posisi paling belakang agar indeks tidak bergeser.
if (posisiRuangMenulis !== -1) {
  P.splice(posisiRuangMenulis, 0, ...tambahanUnit4, ...aktivitasAkhir);
}

if (posisiUnit4 !== -1) {
  P.splice(posisiUnit4, 0, ...tambahanUnit3);
}

if (posisiUnit3 !== -1) {
  P.splice(posisiUnit3, 0, ...tambahanUnit2);
}

if (posisiUnit2 !== -1) {
  P.splice(posisiUnit2, 0, ...tambahanUnit1);
}

/* =========================================================
   PERBARUI DAFTAR ISI
========================================================= */

const toc = document.getElementById("toc");

if (toc) {
  toc.innerHTML = P.map((p, i) => `
    <li>
      <button data-go="${i}">${esc(p.t)}</button>
    </li>
  `).join("");
}

/* =========================================================
   PERBAIKI ROADMAP AGAR INDEKS TIDAK SALAH
========================================================= */

const halamanRoadmap = P.find(p => p.t === "Peta Belajar");

if (halamanRoadmap) {
  halamanRoadmap.init = () => {
    const daftar = [
      ["Pendahuluan", "Tujuan Belajar"],
      ["Unit 1 – Monas", "Unit 1 –"],
      ["Unit 2 – Kota Tua & TMII", "Unit 2 –"],
      ["Unit 3 – Hutan Mangrove", "Unit 3 –"],
      ["Unit 4 – Pantai Ancol & AR", "Unit 4 –"],
      ["Ruang Menulis", "Ruang Menulis"],
      ["Rangkuman", "Rangkuman"],
      ["Refleksi Akhir", "Refleksi"],
      ["Daftar Pustaka", "Daftar Pustaka"]
    ];

    const road = document.getElementById("roadList");

    if (!road) return;

    road.innerHTML = daftar.map(([label, prefix], i) => {
      const index = P.findIndex(p =>
        prefix === "Tujuan Belajar"
          ? p.t === prefix
          : p.t.startsWith(prefix)
      );

      if (index === -1) return "";

      return `
        <li>
          <button data-go="${index}">
            <span class="badge">${i + 1}</span>
            <span>${esc(label)}</span>
          </button>
        </li>
      `;
    }).join("");
  };
}

/* =========================================================
   MUAT CSS DAN MULAI DARI BERANDA
========================================================= */

if (!document.getElementById("extra-learning-styles")) {
  document.head.insertAdjacentHTML("beforeend", styles);
}

go(0);

 
})();
