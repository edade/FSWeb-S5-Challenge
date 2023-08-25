const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header");

  const spn = document.createElement("span");
  spn.setAttribute("class", "date");
  spn.textContent = tarih;

  const h = document.createElement("h1");
  h.textContent = baslik;

  const spn2 = document.createElement("span");
  spn2.classList.add("temp");
  spn2.textContent = yazi;

  headerDiv.append(spn);
  headerDiv.append(h);
  headerDiv.append(spn2);

  return headerDiv;
};

//eski yöntemle
//const headerCont = document.querySelector(".header-container");
//headerCont.append(Header("Teknoloji Zamanı", "25.08.2023", "sağdaki yazı"));

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const header = Header("Teknoloji Zamanı", "25.08.2023", "Merhaba");
  document.querySelector(secici).append(header);
};

export { Header, headerEkleyici };
