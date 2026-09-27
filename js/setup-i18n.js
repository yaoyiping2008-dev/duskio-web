(() => {
  "use strict";

  const STORAGE_KEY = "duskio-setup-language";

  // Setup-page copy only. Step captions and image alt text reuse each translated
  // step title (without its number), so the screenshot files never change.
  const translations = {
    en: {
      label: "Language", eyebrow: "Safari on iPhone and iPad", title: "Set Up Duskio in Safari",
      description: "Safari controls whether the extension is enabled and which websites it can restyle. After these steps, Duskio can apply your selected theme locally on authorized pages.",
      steps: [
        ["Install and open Duskio", "Install Duskio from the App Store, then open the Duskio app once so setup guidance and settings are available on the device."],
        ["Open Safari", "Duskio works inside Safari. Open Safari and go to any webpage you want to read more comfortably."],
        ["Open Safari’s page or extensions menu", "In the Safari toolbar or address area, open the page menu. Depending on your iOS version, this may appear as a page-settings control or an extensions control."],
        ["Open Manage Extensions", "Choose Manage Extensions to see Safari Web Extensions installed on this device."],
        ["Enable Duskio", "Turn Duskio on. Until this switch is enabled, Safari will not load the extension on webpages."],
        ["Allow website access", "Safari asks which websites the extension may access. Duskio needs this permission to restyle page appearance on your device. Access does not send browsing content to us."],
        ["Prefer access on all websites", "For the intended universal dark-mode experience, allow Duskio on all websites. You can still disable Duskio for individual sites later from the popup."],
        ["Return to Safari and open a webpage", "Go back to the page, or visit another HTTP or HTTPS website. If the page was already open, reload it after enabling access."],
        ["Use the Duskio popup", "Open the Duskio item in Safari’s extensions menu. From there you can turn This Website on or off, choose Standard / Compatibility / Safe Mode, and pick a theme."]
      ],
      alternate: ["Another way: iOS Settings", "You can also enable Duskio from Settings: open Settings, then choose Safari → Extensions → Duskio. Enable the extension and allow access to the websites you choose."],
      help: ["If a webpage remains light", "Verify Duskio is enabled in Safari Extensions.", "Verify website access is granted for that site, or for all websites.", "Ensure This Website is enabled in the Duskio popup.", "Check Appearance in the Duskio app: Follow System only darkens pages when the device is in Dark Mode; Always Light never applies dark themes.", "Reload the page."],
      more: "If the page still looks wrong after it is dark, see <a href=\"/support/\">Duskio Support</a> for Compatibility, Safe Mode, and Fix This Site."
    },
    "pt-BR": {
      label: "Idioma", eyebrow: "Safari no iPhone e iPad", title: "Configure o Duskio no Safari",
      description: "O Safari controla se a extensão está ativada e quais sites ela pode reestilizar. Após estas etapas, o Duskio poderá aplicar localmente o tema escolhido às páginas autorizadas.",
      steps: [
        ["Instale e abra o Duskio", "Instale o Duskio pela App Store e abra o app uma vez para disponibilizar as orientações e configurações no dispositivo."],
        ["Abra o Safari", "O Duskio funciona dentro do Safari. Abra o Safari e acesse qualquer página que queira ler com mais conforto."],
        ["Abra o menu da página ou de extensões", "Na barra de ferramentas ou na área de endereço do Safari, abra o menu da página. Dependendo da versão do iOS, ele pode aparecer como controle de ajustes da página ou de extensões."],
        ["Abra Gerenciar Extensões", "Escolha Gerenciar Extensões para ver as extensões web do Safari instaladas neste dispositivo."],
        ["Ative o Duskio", "Ligue o Duskio. Até que essa chave seja ativada, o Safari não carregará a extensão nas páginas."],
        ["Permita acesso aos sites", "O Safari pergunta quais sites a extensão pode acessar. O Duskio precisa dessa permissão para mudar a aparência localmente. O conteúdo de navegação não é enviado para nós."],
        ["Prefira acesso a todos os sites", "Para ter o modo escuro universal, permita o Duskio em todos os sites. Depois, você ainda poderá desativá-lo em sites específicos pelo pop-up."],
        ["Volte ao Safari e abra uma página", "Volte à página ou visite outro site HTTP ou HTTPS. Se a página já estava aberta, recarregue-a depois de permitir o acesso."],
        ["Use o pop-up do Duskio", "Abra o Duskio no menu de extensões do Safari. Nele, você pode ligar ou desligar Este Site, escolher Padrão / Compatibilidade / Modo Seguro e selecionar um tema."]
      ],
      alternate: ["Outra opção: Ajustes do iOS", "Você também pode ativar o Duskio em Ajustes: abra Ajustes e escolha Safari → Extensões → Duskio. Ative a extensão e permita o acesso aos sites desejados."],
      help: ["Se uma página continuar clara", "Verifique se o Duskio está ativado nas extensões do Safari.", "Verifique se o acesso foi permitido para esse site ou para todos os sites.", "Confira se Este Site está ativado no pop-up do Duskio.", "Confira Aparência no Duskio: Seguir o Sistema só escurece páginas quando o dispositivo está no Modo Escuro; Sempre Claro nunca aplica temas escuros.", "Recarregue a página."],
      more: "Se a página ainda parecer incorreta depois de escurecer, consulte o <a href=\"/support/\">Suporte do Duskio</a> sobre Compatibilidade, Modo Seguro e Corrigir Este Site."
    },
    "pt-PT": {
      label: "Idioma", eyebrow: "Safari no iPhone e iPad", title: "Configurar o Duskio no Safari",
      description: "O Safari controla se a extensão está ativa e que sites pode alterar. Após estes passos, o Duskio poderá aplicar localmente o tema escolhido às páginas autorizadas.",
      steps: [
        ["Instale e abra o Duskio", "Instale o Duskio a partir da App Store e abra a aplicação uma vez para disponibilizar as orientações e definições no dispositivo."],
        ["Abra o Safari", "O Duskio funciona no Safari. Abra o Safari e aceda a qualquer página que queira ler mais confortavelmente."],
        ["Abra o menu da página ou das extensões", "Na barra de ferramentas ou área de endereço do Safari, abra o menu da página. Consoante a versão do iOS, pode surgir como controlo de definições da página ou de extensões."],
        ["Abra Gerir extensões", "Escolha Gerir extensões para ver as extensões web do Safari instaladas neste dispositivo."],
        ["Ative o Duskio", "Ligue o Duskio. Enquanto este botão não estiver ativo, o Safari não carregará a extensão nas páginas."],
        ["Permita o acesso aos sites", "O Safari pergunta a que sites a extensão pode aceder. O Duskio precisa desta permissão para alterar o aspeto localmente. O conteúdo de navegação não nos é enviado."],
        ["Prefira o acesso a todos os sites", "Para obter o modo escuro universal, permita o Duskio em todos os sites. Poderá desativá-lo mais tarde em sites específicos no pop-up."],
        ["Volte ao Safari e abra uma página", "Volte à página ou visite outro site HTTP ou HTTPS. Se a página já estava aberta, recarregue-a depois de permitir o acesso."],
        ["Use o pop-up do Duskio", "Abra o Duskio no menu de extensões do Safari. Aí pode ativar ou desativar Este site, escolher Padrão / Compatibilidade / Modo seguro e selecionar um tema."]
      ],
      alternate: ["Outra opção: Definições do iOS", "Também pode ativar o Duskio nas Definições: abra Definições e escolha Safari → Extensões → Duskio. Ative a extensão e permita o acesso aos sites pretendidos."],
      help: ["Se uma página continuar clara", "Verifique se o Duskio está ativo nas extensões do Safari.", "Verifique se o acesso está permitido para esse site ou para todos os sites.", "Confirme que Este site está ativo no pop-up do Duskio.", "Veja Aspeto no Duskio: Seguir o sistema só escurece páginas quando o dispositivo está no Modo escuro; Sempre claro nunca aplica temas escuros.", "Recarregue a página."],
      more: "Se a página ainda parecer incorreta depois de escurecer, consulte o <a href=\"/support/\">Suporte Duskio</a> sobre Compatibilidade, Modo seguro e Corrigir este site."
    },
    ro: {
      label: "Limbă", eyebrow: "Safari pe iPhone și iPad", title: "Configurați Duskio în Safari",
      description: "Safari controlează dacă extensia este activată și ce site-uri poate restiliza. După acești pași, Duskio poate aplica local tema aleasă pe paginile autorizate.",
      steps: [
        ["Instalați și deschideți Duskio", "Instalați Duskio din App Store, apoi deschideți aplicația o dată pentru ca instrucțiunile și setările să fie disponibile pe dispozitiv."],
        ["Deschideți Safari", "Duskio funcționează în Safari. Deschideți Safari și accesați o pagină web pe care doriți să o citiți mai confortabil."],
        ["Deschideți meniul paginii sau extensiilor", "În bara de instrumente sau zona adresei Safari, deschideți meniul paginii. În funcție de versiunea iOS, poate apărea drept control pentru setările paginii sau extensii."],
        ["Deschideți Gestionați extensiile", "Alegeți Gestionați extensiile pentru a vedea extensiile web Safari instalate pe dispozitiv."],
        ["Activați Duskio", "Porniți Duskio. Până la activarea comutatorului, Safari nu va încărca extensia pe pagini."],
        ["Permiteți accesul la site-uri", "Safari întreabă ce site-uri poate accesa extensia. Duskio are nevoie de permisiune pentru a schimba aspectul local. Conținutul navigării nu ne este trimis."],
        ["Preferați accesul la toate site-urile", "Pentru modul întunecat universal, permiteți Duskio pe toate site-urile. Îl puteți dezactiva ulterior pentru site-uri individuale din fereastra pop-up."],
        ["Reveniți în Safari și deschideți o pagină", "Reveniți la pagină sau vizitați alt site HTTP ori HTTPS. Dacă pagina era deja deschisă, reîncărcați-o după acordarea accesului."],
        ["Folosiți fereastra pop-up Duskio", "Deschideți Duskio din meniul extensiilor Safari. Acolo puteți activa sau dezactiva Acest site, alege Standard / Compatibilitate / Mod sigur și selecta o temă."]
      ],
      alternate: ["Altă metodă: Configurări iOS", "Puteți activa Duskio și din Configurări: deschideți Configurări, apoi alegeți Safari → Extensii → Duskio. Activați extensia și accesul la site-urile dorite."],
      help: ["Dacă o pagină rămâne luminoasă", "Verificați dacă Duskio este activat în extensiile Safari.", "Verificați dacă accesul este permis pentru acel site sau pentru toate site-urile.", "Asigurați-vă că Acest site este activat în fereastra Duskio.", "Verificați Aspect în Duskio: Urmează sistemul întunecă doar când dispozitivul este în modul întunecat; Mereu luminos nu aplică teme întunecate.", "Reîncărcați pagina."],
      more: "Dacă pagina arată în continuare greșit după întunecare, consultați <a href=\"/support/\">Asistența Duskio</a> pentru Compatibilitate, Mod sigur și Repară acest site."
    },
    ru: {
      label: "Язык", eyebrow: "Safari на iPhone и iPad", title: "Настройка Duskio в Safari",
      description: "Safari управляет включением расширения и определяет, какие сайты оно может оформлять. После этих шагов Duskio сможет локально применять выбранную тему к разрешённым страницам.",
      steps: [
        ["Установите и откройте Duskio", "Установите Duskio из App Store, затем один раз откройте приложение, чтобы на устройстве стали доступны инструкции и настройки."],
        ["Откройте Safari", "Duskio работает в Safari. Откройте Safari и перейдите на веб-страницу, которую хотите читать с большим комфортом."],
        ["Откройте меню страницы или расширений", "Откройте меню страницы на панели инструментов или в адресной области Safari. В зависимости от версии iOS оно может выглядеть как кнопка настроек страницы или расширений."],
        ["Откройте Управление расширениями", "Выберите Управление расширениями, чтобы увидеть установленные на устройстве веб-расширения Safari."],
        ["Включите Duskio", "Включите Duskio. Пока переключатель выключен, Safari не загружает расширение на веб-страницах."],
        ["Разрешите доступ к сайтам", "Safari спрашивает, к каким сайтам может обращаться расширение. Duskio нужно это разрешение для локального изменения вида страниц. Данные просмотра нам не отправляются."],
        ["Предпочтительно разрешите все сайты", "Для универсального тёмного режима разрешите Duskio на всех сайтах. Позже его можно отключить для отдельных сайтов во всплывающем окне."],
        ["Вернитесь в Safari и откройте страницу", "Вернитесь на страницу или посетите другой сайт HTTP или HTTPS. Если страница уже была открыта, перезагрузите её после выдачи разрешения."],
        ["Используйте окно Duskio", "Откройте Duskio в меню расширений Safari. Здесь можно включить или выключить Этот сайт, выбрать Стандартный / Совместимость / Безопасный режим и тему."]
      ],
      alternate: ["Другой способ: Настройки iOS", "Duskio также можно включить в Настройках: откройте Настройки и выберите Safari → Расширения → Duskio. Включите расширение и доступ к выбранным сайтам."],
      help: ["Если страница остаётся светлой", "Убедитесь, что Duskio включён в расширениях Safari.", "Убедитесь, что доступ разрешён для этого или всех сайтов.", "Убедитесь, что Этот сайт включён в окне Duskio.", "Проверьте Оформление в Duskio: Как в системе затемняет страницы только при тёмном режиме устройства; Всегда светлое никогда не применяет тёмные темы.", "Перезагрузите страницу."],
      more: "Если после затемнения страница всё ещё выглядит неверно, откройте <a href=\"/support/\">Поддержку Duskio</a> и сведения о Совместимости, Безопасном режиме и Исправлении сайта."
    },
    sr: {
      label: "Језик", eyebrow: "Safari на iPhone-у и iPad-у", title: "Подесите Duskio у Safari-ју",
      description: "Safari контролише да ли је проширење укључено и које сајтове може да преобликује. Након ових корака, Duskio може локално да примени изабрану тему на дозвољене странице.",
      steps: [
        ["Инсталирајте и отворите Duskio", "Инсталирајте Duskio из App Store-а, затим једном отворите апликацију како би упутства и подешавања била доступна на уређају."],
        ["Отворите Safari", "Duskio ради у Safari-ју. Отворите Safari и посетите веб-страницу коју желите удобније да читате."],
        ["Отворите мени странице или проширења", "У траци са алаткама или адреси Safari-ја отворите мени странице. У зависности од верзије iOS-а, може изгледати као контрола подешавања странице или проширења."],
        ["Отворите Управљање проширењима", "Изаберите Управљање проширењима да бисте видели Safari веб-проширења инсталирана на уређају."],
        ["Омогућите Duskio", "Укључите Duskio. Док прекидач није укључен, Safari неће учитавати проширење на страницама."],
        ["Дозволите приступ сајтовима", "Safari пита којим сајтовима проширење сме да приступи. Duskio захтева дозволу да локално мења изглед. Садржај прегледања нам се не шаље."],
        ["Пожељно дозволите све сајтове", "За универзални тамни режим дозволите Duskio на свим сајтовима. Касније га можете искључити за појединачне сајтове у искачућем прозору."],
        ["Вратите се у Safari и отворите страницу", "Вратите се на страницу или посетите други HTTP или HTTPS сајт. Ако је страница већ била отворена, поново је учитајте након дозволе."],
        ["Користите Duskio искачући прозор", "Отворите Duskio у менију проширења Safari-ја. Ту можете укључити или искључити Овај сајт, изабрати Стандардни / Компатибилност / Безбедни режим и тему."]
      ],
      alternate: ["Други начин: iOS подешавања", "Duskio можете укључити и у Подешавањима: отворите Подешавања и изаберите Safari → Проширења → Duskio. Укључите проширење и приступ изабраним сајтовима."],
      help: ["Ако страница остане светла", "Проверите да ли је Duskio омогућен у Safari проширењима.", "Проверите да ли је приступ дозвољен за тај или све сајтове.", "Уверите се да је Овај сајт укључен у Duskio прозору.", "Проверите Изглед у Duskio-ју: Прати систем затамњује само када је уређај у тамном режиму; Увек светло никада не примењује тамне теме.", "Поново учитајте страницу."],
      more: "Ако страница и даље изгледа погрешно након затамњивања, погледајте <a href=\"/support/\">Duskio подршку</a> за Компатибилност, Безбедни режим и Поправку овог сајта."
    },
    es: {
      label: "Idioma", eyebrow: "Safari en iPhone y iPad", title: "Configura Duskio en Safari",
      description: "Safari controla si la extensión está activada y qué sitios web puede rediseñar. Tras estos pasos, Duskio podrá aplicar localmente el tema elegido a las páginas autorizadas.",
      steps: [
        ["Instala y abre Duskio", "Instala Duskio desde App Store y abre la app una vez para que las instrucciones y los ajustes estén disponibles en el dispositivo."],
        ["Abre Safari", "Duskio funciona dentro de Safari. Abre Safari y ve a cualquier página web que quieras leer con mayor comodidad."],
        ["Abre el menú de página o extensiones", "En la barra de herramientas o el área de dirección de Safari, abre el menú de la página. Según la versión de iOS, puede aparecer como control de ajustes de página o de extensiones."],
        ["Abre Gestionar extensiones", "Elige Gestionar extensiones para ver las extensiones web de Safari instaladas en el dispositivo."],
        ["Activa Duskio", "Enciende Duskio. Hasta que actives este interruptor, Safari no cargará la extensión en las páginas web."],
        ["Permite el acceso a sitios web", "Safari pregunta a qué sitios puede acceder la extensión. Duskio necesita el permiso para cambiar localmente el aspecto. El contenido de navegación no se nos envía."],
        ["Da preferencia al acceso a todos los sitios", "Para disfrutar del modo oscuro universal, permite Duskio en todos los sitios. Después podrás desactivarlo en sitios concretos desde la ventana emergente."],
        ["Vuelve a Safari y abre una página", "Vuelve a la página o visita otro sitio HTTP o HTTPS. Si ya estaba abierta, recárgala después de permitir el acceso."],
        ["Usa la ventana emergente de Duskio", "Abre Duskio desde el menú de extensiones de Safari. Puedes activar o desactivar Este sitio web, elegir Estándar / Compatibilidad / Modo seguro y seleccionar un tema."]
      ],
      alternate: ["Otra opción: Ajustes de iOS", "También puedes activar Duskio desde Ajustes: abre Ajustes y elige Safari → Extensiones → Duskio. Activa la extensión y permite el acceso a los sitios que elijas."],
      help: ["Si una página sigue clara", "Comprueba que Duskio esté activado en las extensiones de Safari.", "Comprueba que se haya permitido el acceso a ese sitio o a todos los sitios.", "Asegúrate de que Este sitio web esté activado en la ventana de Duskio.", "Comprueba Apariencia en Duskio: Seguir el sistema solo oscurece las páginas cuando el dispositivo está en modo oscuro; Siempre claro nunca aplica temas oscuros.", "Recarga la página."],
      more: "Si la página sigue viéndose mal después de oscurecerse, consulta el <a href=\"/support/\">soporte de Duskio</a> sobre Compatibilidad, Modo seguro y Corregir este sitio."
    },
    uk: {
      label: "Мова", eyebrow: "Safari на iPhone та iPad", title: "Налаштування Duskio в Safari",
      description: "Safari керує ввімкненням розширення та визначає, які сайти воно може оформлювати. Після цих кроків Duskio зможе локально застосовувати вибрану тему до дозволених сторінок.",
      steps: [
        ["Установіть і відкрийте Duskio", "Установіть Duskio з App Store, а потім один раз відкрийте застосунок, щоб на пристрої стали доступні вказівки й налаштування."],
        ["Відкрийте Safari", "Duskio працює в Safari. Відкрийте Safari та перейдіть на вебсторінку, яку хочете читати комфортніше."],
        ["Відкрийте меню сторінки або розширень", "Відкрийте меню сторінки на панелі інструментів або в адресній області Safari. Залежно від версії iOS воно може виглядати як елемент керування сторінкою або розширеннями."],
        ["Відкрийте Керування розширеннями", "Виберіть Керування розширеннями, щоб побачити встановлені на пристрої веброзширення Safari."],
        ["Увімкніть Duskio", "Увімкніть Duskio. Доки перемикач вимкнено, Safari не завантажуватиме розширення на сторінках."],
        ["Дозвольте доступ до сайтів", "Safari запитує, до яких сайтів розширення може мати доступ. Duskio потребує дозволу для локальної зміни вигляду. Вміст перегляду нам не надсилається."],
        ["Бажано дозвольте всі сайти", "Для універсального темного режиму дозвольте Duskio на всіх сайтах. Згодом його можна вимкнути для окремих сайтів у спливному вікні."],
        ["Поверніться в Safari й відкрийте сторінку", "Поверніться на сторінку або відвідайте інший сайт HTTP чи HTTPS. Якщо сторінка вже була відкрита, перезавантажте її після надання доступу."],
        ["Скористайтеся вікном Duskio", "Відкрийте Duskio в меню розширень Safari. Тут можна ввімкнути або вимкнути Цей сайт, вибрати Стандартний / Сумісність / Безпечний режим і тему."]
      ],
      alternate: ["Інший спосіб: Параметри iOS", "Duskio також можна ввімкнути в Параметрах: відкрийте Параметри та виберіть Safari → Розширення → Duskio. Увімкніть розширення й доступ до вибраних сайтів."],
      help: ["Якщо сторінка залишається світлою", "Перевірте, чи Duskio ввімкнено в розширеннях Safari.", "Перевірте, чи дозволено доступ до цього або всіх сайтів.", "Переконайтеся, що Цей сайт увімкнено у вікні Duskio.", "Перевірте Вигляд у Duskio: Як у системі затемнює лише в темному режимі пристрою; Завжди світлий ніколи не застосовує темні теми.", "Перезавантажте сторінку."],
      more: "Якщо після затемнення сторінка все ще має неправильний вигляд, перегляньте <a href=\"/support/\">Підтримку Duskio</a> щодо Сумісності, Безпечного режиму й Виправлення сайту."
    },
    vi: {
      label: "Ngôn ngữ", eyebrow: "Safari trên iPhone và iPad", title: "Thiết lập Duskio trong Safari",
      description: "Safari kiểm soát việc bật tiện ích và những trang web tiện ích có thể đổi kiểu. Sau các bước này, Duskio có thể áp dụng chủ đề đã chọn ngay trên thiết bị cho các trang được phép.",
      steps: [
        ["Cài đặt và mở Duskio", "Cài đặt Duskio từ App Store, sau đó mở ứng dụng một lần để hướng dẫn và cài đặt có sẵn trên thiết bị."],
        ["Mở Safari", "Duskio hoạt động trong Safari. Mở Safari và truy cập trang web bạn muốn đọc thoải mái hơn."],
        ["Mở menu trang hoặc tiện ích của Safari", "Trong thanh công cụ hoặc vùng địa chỉ của Safari, mở menu trang. Tùy phiên bản iOS, nút này có thể là điều khiển cài đặt trang hoặc tiện ích."],
        ["Mở Quản lý tiện ích", "Chọn Quản lý tiện ích để xem các tiện ích web Safari đã cài trên thiết bị."],
        ["Bật Duskio", "Bật Duskio. Trước khi công tắc này được bật, Safari sẽ không tải tiện ích trên các trang web."],
        ["Cho phép truy cập trang web", "Safari hỏi tiện ích có thể truy cập trang web nào. Duskio cần quyền này để thay đổi giao diện ngay trên thiết bị. Nội dung duyệt web không được gửi cho chúng tôi."],
        ["Nên cho phép trên tất cả trang web", "Để có chế độ tối toàn diện, hãy cho phép Duskio trên tất cả trang web. Sau đó bạn vẫn có thể tắt Duskio cho từng trang từ cửa sổ bật lên."],
        ["Quay lại Safari và mở trang web", "Quay lại trang hoặc truy cập một trang HTTP hay HTTPS khác. Nếu trang đã mở, hãy tải lại sau khi cho phép truy cập."],
        ["Sử dụng cửa sổ bật lên Duskio", "Mở Duskio trong menu tiện ích của Safari. Tại đây bạn có thể bật hoặc tắt Trang web này, chọn Tiêu chuẩn / Tương thích / Chế độ an toàn và chọn chủ đề."]
      ],
      alternate: ["Cách khác: Cài đặt iOS", "Bạn cũng có thể bật Duskio trong Cài đặt: mở Cài đặt, rồi chọn Safari → Tiện ích → Duskio. Bật tiện ích và cho phép truy cập các trang web bạn chọn."],
      help: ["Nếu trang web vẫn sáng", "Xác minh Duskio đã được bật trong Tiện ích Safari.", "Xác minh quyền truy cập đã được cấp cho trang đó hoặc tất cả trang web.", "Đảm bảo Trang web này được bật trong cửa sổ Duskio.", "Kiểm tra Giao diện trong Duskio: Theo hệ thống chỉ làm tối khi thiết bị ở Chế độ tối; Luôn sáng không bao giờ áp dụng chủ đề tối.", "Tải lại trang."],
      more: "Nếu trang vẫn hiển thị sai sau khi chuyển tối, hãy xem <a href=\"/support/\">Hỗ trợ Duskio</a> về Tương thích, Chế độ an toàn và Sửa trang web này."
    },
    pl: {
      label: "Język", eyebrow: "Safari na iPhonie i iPadzie", title: "Konfiguracja Duskio w Safari",
      description: "Safari określa, czy rozszerzenie jest włączone i które witryny może zmieniać. Po wykonaniu tych kroków Duskio może lokalnie stosować wybrany motyw na dozwolonych stronach.",
      steps: [
        ["Zainstaluj i otwórz Duskio", "Zainstaluj Duskio z App Store, a następnie raz otwórz aplikację, aby na urządzeniu były dostępne wskazówki i ustawienia."],
        ["Otwórz Safari", "Duskio działa w Safari. Otwórz Safari i przejdź do strony, którą chcesz czytać wygodniej."],
        ["Otwórz menu strony lub rozszerzeń", "Na pasku narzędzi lub w obszarze adresu Safari otwórz menu strony. Zależnie od wersji iOS może wyglądać jak element ustawień strony lub rozszerzeń."],
        ["Otwórz Zarządzaj rozszerzeniami", "Wybierz Zarządzaj rozszerzeniami, aby zobaczyć rozszerzenia Safari zainstalowane na tym urządzeniu."],
        ["Włącz Duskio", "Włącz Duskio. Dopóki przełącznik nie będzie aktywny, Safari nie wczyta rozszerzenia na stronach."],
        ["Zezwól na dostęp do witryn", "Safari pyta, do których witryn rozszerzenie może mieć dostęp. Duskio potrzebuje zgody, aby lokalnie zmieniać wygląd. Treść przeglądania nie jest nam wysyłana."],
        ["Najlepiej zezwól na wszystkie witryny", "Aby korzystać z uniwersalnego trybu ciemnego, zezwól Duskio na wszystkich witrynach. Później możesz je wyłączyć w poszczególnych witrynach z okna podręcznego."],
        ["Wróć do Safari i otwórz stronę", "Wróć do strony lub odwiedź inną witrynę HTTP albo HTTPS. Jeśli strona była już otwarta, odśwież ją po zezwoleniu na dostęp."],
        ["Użyj okna podręcznego Duskio", "Otwórz Duskio w menu rozszerzeń Safari. Możesz tam włączyć lub wyłączyć Tę witrynę, wybrać Standardowy / Zgodność / Tryb bezpieczny i motyw."]
      ],
      alternate: ["Inny sposób: Ustawienia iOS", "Duskio można też włączyć w Ustawieniach: otwórz Ustawienia i wybierz Safari → Rozszerzenia → Duskio. Włącz rozszerzenie i dostęp do wybranych witryn."],
      help: ["Jeśli strona pozostaje jasna", "Sprawdź, czy Duskio jest włączone w rozszerzeniach Safari.", "Sprawdź, czy przyznano dostęp do tej lub wszystkich witryn.", "Upewnij się, że Ta witryna jest włączona w oknie Duskio.", "Sprawdź Wygląd w Duskio: Zgodnie z systemem przyciemnia tylko w trybie ciemnym urządzenia; Zawsze jasno nigdy nie stosuje ciemnych motywów.", "Odśwież stronę."],
      more: "Jeśli po przyciemnieniu strona nadal wygląda źle, zobacz <a href=\"/support/\">Pomoc Duskio</a> dotyczącą Zgodności, Trybu bezpiecznego i Naprawy tej witryny."
    },
    da: {
      label: "Sprog", eyebrow: "Safari på iPhone og iPad", title: "Indstil Duskio i Safari",
      description: "Safari styrer, om udvidelsen er aktiveret, og hvilke websteder den må ændre. Efter disse trin kan Duskio anvende det valgte tema lokalt på tilladte sider.",
      steps: [
        ["Installer og åbn Duskio", "Installer Duskio fra App Store, og åbn appen én gang, så vejledning og indstillinger er tilgængelige på enheden."],
        ["Åbn Safari", "Duskio fungerer i Safari. Åbn Safari, og gå til en webside, du gerne vil læse mere behageligt."],
        ["Åbn Safaris side- eller udvidelsesmenu", "Åbn sidemenuen i Safaris værktøjslinje eller adresseområde. Afhængigt af iOS-versionen kan den vises som en knap til sideindstillinger eller udvidelser."],
        ["Åbn Administrer udvidelser", "Vælg Administrer udvidelser for at se de Safari-webudvidelser, der er installeret på enheden."],
        ["Aktivér Duskio", "Slå Duskio til. Indtil kontakten er aktiveret, indlæser Safari ikke udvidelsen på websider."],
        ["Tillad adgang til websteder", "Safari spørger, hvilke websteder udvidelsen må tilgå. Duskio skal bruge tilladelsen til at ændre udseendet lokalt. Browserindhold sendes ikke til os."],
        ["Tillad helst alle websteder", "Tillad Duskio på alle websteder for universel mørk tilstand. Du kan senere slå Duskio fra på enkelte websteder via pop op-vinduet."],
        ["Gå tilbage til Safari og åbn en webside", "Gå tilbage til siden, eller besøg et andet HTTP- eller HTTPS-websted. Hvis siden allerede var åben, skal du genindlæse den efter tilladelsen."],
        ["Brug Duskios pop op-vindue", "Åbn Duskio i Safaris udvidelsesmenu. Her kan du slå Dette websted til eller fra, vælge Standard / Kompatibilitet / Sikker tilstand og et tema."]
      ],
      alternate: ["En anden måde: iOS-indstillinger", "Du kan også aktivere Duskio i Indstillinger: Åbn Indstillinger, og vælg Safari → Udvidelser → Duskio. Aktivér udvidelsen og adgang til de ønskede websteder."],
      help: ["Hvis en webside forbliver lys", "Kontrollér, at Duskio er aktiveret under Safari-udvidelser.", "Kontrollér, at der er givet adgang til det eller alle websteder.", "Sørg for, at Dette websted er aktiveret i Duskios vindue.", "Kontrollér Udseende i Duskio: Følg system gør kun sider mørke, når enheden bruger mørk tilstand; Altid lys anvender aldrig mørke temaer.", "Genindlæs siden."],
      more: "Hvis siden stadig ser forkert ud efter mørklægning, kan du se <a href=\"/support/\">Duskio Support</a> om Kompatibilitet, Sikker tilstand og Ret dette websted."
    },
    ar: {
      label: "اللغة", eyebrow: "Safari على iPhone وiPad", title: "إعداد Duskio في Safari",
      description: "يتحكم Safari في تمكين الامتداد والمواقع التي يمكنه إعادة تنسيقها. بعد هذه الخطوات، يستطيع Duskio تطبيق السمة المختارة محليًا على الصفحات المسموح بها.",
      steps: [
        ["ثبّت Duskio وافتحه", "ثبّت Duskio من App Store، ثم افتح التطبيق مرة واحدة لتتوفر إرشادات الإعداد والإعدادات على الجهاز."],
        ["افتح Safari", "يعمل Duskio داخل Safari. افتح Safari وانتقل إلى أي صفحة ويب تريد قراءتها براحة أكبر."],
        ["افتح قائمة الصفحة أو الامتدادات في Safari", "افتح قائمة الصفحة من شريط أدوات Safari أو منطقة العنوان. قد تظهر كعنصر تحكم في إعدادات الصفحة أو الامتدادات حسب إصدار iOS."],
        ["افتح إدارة الامتدادات", "اختر إدارة الامتدادات لرؤية امتدادات Safari المثبتة على هذا الجهاز."],
        ["فعّل Duskio", "شغّل Duskio. لن يحمّل Safari الامتداد على صفحات الويب حتى يتم تمكين هذا المفتاح."],
        ["اسمح بالوصول إلى المواقع", "يسأل Safari عن المواقع التي يمكن للامتداد الوصول إليها. يحتاج Duskio هذا الإذن لتغيير مظهر الصفحات على جهازك، ولا يرسل محتوى التصفح إلينا."],
        ["فضّل الوصول إلى جميع المواقع", "للحصول على الوضع الداكن الشامل، اسمح لـ Duskio بالعمل على جميع المواقع. ويمكنك تعطيله لاحقًا لمواقع محددة من النافذة المنبثقة."],
        ["عُد إلى Safari وافتح صفحة ويب", "عُد إلى الصفحة أو زر موقع HTTP أو HTTPS آخر. إذا كانت الصفحة مفتوحة بالفعل، فأعد تحميلها بعد السماح بالوصول."],
        ["استخدم نافذة Duskio المنبثقة", "افتح Duskio من قائمة امتدادات Safari. يمكنك تشغيل «هذا الموقع» أو إيقافه، واختيار الوضع القياسي أو التوافق أو الآمن، واختيار سمة."]
      ],
      alternate: ["طريقة أخرى: إعدادات iOS", "يمكنك أيضًا تمكين Duskio من الإعدادات: افتح الإعدادات، ثم اختر Safari ← الامتدادات ← Duskio. فعّل الامتداد واسمح بالوصول إلى المواقع التي تختارها."],
      help: ["إذا بقيت صفحة الويب فاتحة", "تحقق من تمكين Duskio في امتدادات Safari.", "تحقق من منح الوصول لهذا الموقع أو لجميع المواقع.", "تأكد من تمكين «هذا الموقع» في نافذة Duskio المنبثقة.", "تحقق من «المظهر» في تطبيق Duskio: خيار «اتباع النظام» يجعل الصفحات داكنة فقط عندما يكون الجهاز في الوضع الداكن؛ أما «فاتح دائمًا» فلا يطبق السمات الداكنة.", "أعد تحميل الصفحة."],
      more: "إذا ظل مظهر الصفحة غير صحيح بعد تعتيمها، فراجع <a href=\"/support/\">دعم Duskio</a> للتوافق والوضع الآمن وإصلاح هذا الموقع."
    },
    bg: {
      label: "Език", eyebrow: "Safari на iPhone и iPad", title: "Настройване на Duskio в Safari",
      description: "Safari определя дали разширението е включено и кои сайтове може да променя. След тези стъпки Duskio може локално да прилага избраната тема към разрешените страници.",
      steps: [
        ["Инсталирайте и отворете Duskio", "Инсталирайте Duskio от App Store, после отворете приложението веднъж, за да са достъпни указанията и настройките."],
        ["Отворете Safari", "Duskio работи в Safari. Отворете Safari и посетете уебстраница, която искате да четете по-удобно."],
        ["Отворете менюто за страницата или разширенията", "Отворете менюто за страницата от лентата или адресното поле на Safari. Според версията на iOS то може да изглежда като управление на страницата или разширенията."],
        ["Отворете Управление на разширенията", "Изберете Управление на разширенията, за да видите инсталираните разширения за Safari."],
        ["Включете Duskio", "Включете Duskio. Докато превключвателят не е активен, Safari няма да зарежда разширението в страниците."],
        ["Разрешете достъп до сайтовете", "Safari пита до кои сайтове има достъп разширението. Duskio се нуждае от това разрешение, за да променя изгледа локално. Съдържанието не се изпраща до нас."],
        ["Предпочетете достъп до всички сайтове", "За пълноценен тъмен режим разрешете Duskio за всички сайтове. По-късно може да го изключите за отделни сайтове от изскачащия прозорец."],
        ["Върнете се в Safari и отворете страница", "Върнете се към страницата или посетете друг HTTP или HTTPS сайт. Ако вече е била отворена, презаредете я след разрешаването."],
        ["Използвайте изскачащия прозорец на Duskio", "Отворете Duskio от менюто с разширения на Safari. Там може да включите или изключите Този сайт, да изберете Стандартен / Съвместимост / Безопасен режим и тема."]
      ],
      alternate: ["Друг начин: Настройки на iOS", "Може да включите Duskio и от Настройки: отворете Настройки и изберете Safari → Разширения → Duskio. Включете разширението и разрешете избраните сайтове."],
      help: ["Ако страницата остане светла", "Проверете дали Duskio е включен в разширенията на Safari.", "Проверете дали е даден достъп за този или за всички сайтове.", "Уверете се, че Този сайт е включено в прозореца на Duskio.", "Проверете Изглед в Duskio: Следване на системата затъмнява само при тъмен режим на устройството; Винаги светло никога не прилага тъмни теми.", "Презаредете страницата."],
      more: "Ако след затъмняването страницата още изглежда неправилно, вижте <a href=\"/support/\">Поддръжка на Duskio</a> за Съвместимост, Безопасен режим и Поправяне на този сайт."
    },
    "zh-Hans": {
      label: "语言", eyebrow: "iPhone 和 iPad 上的 Safari", title: "在 Safari 中设置 Duskio",
      description: "Safari 控制是否启用扩展以及扩展可以调整哪些网站的样式。完成以下步骤后，Duskio 可在获准的页面上本地应用你选择的主题。",
      steps: [
        ["安装并打开 Duskio", "从 App Store 安装 Duskio，然后打开一次 Duskio App，以便在设备上使用设置指引和选项。"],
        ["打开 Safari", "Duskio 在 Safari 中运行。打开 Safari，并前往你想更舒适地阅读的任意网页。"],
        ["打开 Safari 的页面或扩展菜单", "在 Safari 工具栏或地址区域打开页面菜单。根据 iOS 版本，它可能显示为页面设置或扩展控制按钮。"],
        ["打开“管理扩展”", "选择“管理扩展”，查看此设备上安装的 Safari 网页扩展。"],
        ["启用 Duskio", "打开 Duskio 开关。启用此开关前，Safari 不会在网页上加载该扩展。"],
        ["允许访问网站", "Safari 会询问扩展可访问哪些网站。Duskio 需要此权限才能在你的设备上调整页面外观。访问权限不会向我们发送浏览内容。"],
        ["建议允许访问所有网站", "如需完整的通用深色模式体验，请允许 Duskio 访问所有网站。之后仍可在弹出窗口中为个别网站停用 Duskio。"],
        ["返回 Safari 并打开网页", "返回该页面，或访问其他 HTTP 或 HTTPS 网站。如果页面已经打开，请在允许访问后重新载入。"],
        ["使用 Duskio 弹出窗口", "从 Safari 的扩展菜单中打开 Duskio。你可以在其中开关“此网站”，选择“标准 / 兼容 / 安全模式”，并选择主题。"]
      ],
      alternate: ["另一种方式：iOS 设置", "也可以从“设置”启用 Duskio：打开“设置”，然后选择 Safari → 扩展 → Duskio。启用扩展并允许其访问你选择的网站。"],
      help: ["如果网页仍为浅色", "确认已在 Safari 扩展中启用 Duskio。", "确认已允许访问该网站或所有网站。", "确认 Duskio 弹出窗口中的“此网站”已启用。", "检查 Duskio App 中的“外观”：“跟随系统”仅在设备处于深色模式时使页面变暗；“始终浅色”不会应用深色主题。", "重新载入页面。"],
      more: "如果页面变暗后显示仍不正常，请参阅 <a href=\"/support/\">Duskio 支持</a>，了解兼容模式、安全模式和“修复此网站”。"
    },
    hr: {
      label: "Jezik", eyebrow: "Safari na iPhoneu i iPadu", title: "Postavljanje Duskija u Safariju",
      description: "Safari određuje je li proširenje omogućeno i koje web-stranice može preoblikovati. Nakon ovih koraka Duskio može lokalno primijeniti odabranu temu na dopuštene stranice.",
      steps: [
        ["Instalirajte i otvorite Duskio", "Instalirajte Duskio iz App Storea, zatim jednom otvorite aplikaciju kako bi upute i postavke bile dostupne na uređaju."],
        ["Otvorite Safari", "Duskio radi unutar Safarija. Otvorite Safari i posjetite bilo koju web-stranicu koju želite ugodnije čitati."],
        ["Otvorite izbornik stranice ili proširenja", "U alatnoj traci ili adresnom području Safarija otvorite izbornik stranice. Ovisno o verziji iOS-a, može izgledati kao kontrola postavki stranice ili proširenja."],
        ["Otvorite Upravljanje proširenjima", "Odaberite Upravljanje proširenjima kako biste vidjeli Safari proširenja instalirana na uređaju."],
        ["Omogućite Duskio", "Uključite Duskio. Safari neće učitati proširenje na stranicama dok taj prekidač nije uključen."],
        ["Dopustite pristup web-mjestima", "Safari pita kojim web-mjestima proširenje smije pristupiti. Duskiju je dopuštenje potrebno za lokalnu promjenu izgleda; sadržaj pregledavanja ne šalje se nama."],
        ["Dopustite pristup svim web-mjestima", "Za univerzalni tamni način dopustite Duskio na svim web-mjestima. Kasnije ga možete isključiti za pojedina mjesta u skočnom prozoru."],
        ["Vratite se u Safari i otvorite stranicu", "Vratite se na stranicu ili posjetite drugo HTTP ili HTTPS web-mjesto. Ako je već otvorena, ponovno je učitajte nakon omogućavanja pristupa."],
        ["Upotrijebite skočni prozor Duskija", "Otvorite Duskio u Safarijevu izborniku proširenja. Ondje možete uključiti ili isključiti Ovo web-mjesto, odabrati Standardno / Kompatibilnost / Sigurni način i temu."]
      ],
      alternate: ["Drugi način: Postavke iOS-a", "Duskio možete omogućiti i u Postavkama: otvorite Postavke pa odaberite Safari → Proširenja → Duskio. Omogućite proširenje i pristup odabranim web-mjestima."],
      help: ["Ako web-stranica ostane svijetla", "Provjerite je li Duskio omogućen u proširenjima Safarija.", "Provjerite je li dopušten pristup tom ili svim web-mjestima.", "Provjerite je li Ovo web-mjesto uključeno u skočnom prozoru Duskija.", "Provjerite Izgled u Duskiju: Prati sustav zatamnjuje samo kada je uređaj u tamnom načinu; Uvijek svijetlo nikada ne primjenjuje tamne teme.", "Ponovno učitajte stranicu."],
      more: "Ako stranica i dalje izgleda pogrešno nakon zatamnjenja, pogledajte <a href=\"/support/\">Podršku za Duskio</a> za Kompatibilnost, Sigurni način i Popravi ovo web-mjesto."
    },
    nl: {
      label: "Taal", eyebrow: "Safari op iPhone en iPad", title: "Duskio instellen in Safari",
      description: "Safari bepaalt of de extensie is ingeschakeld en welke websites deze mag aanpassen. Na deze stappen kan Duskio je gekozen thema lokaal toepassen op toegestane pagina’s.",
      steps: [
        ["Installeer en open Duskio", "Installeer Duskio vanuit de App Store en open de app eenmaal, zodat de installatiehulp en instellingen op het apparaat beschikbaar zijn."],
        ["Open Safari", "Duskio werkt in Safari. Open Safari en ga naar een webpagina die je prettiger wilt lezen."],
        ["Open het pagina- of extensiemenu van Safari", "Open het paginamenu in de knoppenbalk of adresbalk van Safari. Afhankelijk van je iOS-versie kan dit een knop voor pagina-instellingen of extensies zijn."],
        ["Open Beheer extensies", "Kies Beheer extensies om de geïnstalleerde Safari-webextensies te bekijken."],
        ["Schakel Duskio in", "Zet Duskio aan. Zolang deze schakelaar uitstaat, laadt Safari de extensie niet op webpagina’s."],
        ["Sta toegang tot websites toe", "Safari vraagt welke websites de extensie mag openen. Duskio heeft deze toestemming nodig om de weergave lokaal aan te passen. Browse-inhoud wordt niet naar ons verzonden."],
        ["Geef bij voorkeur toegang tot alle websites", "Sta Duskio op alle websites toe voor de bedoelde universele donkere modus. Je kunt Duskio later per website uitschakelen via de pop-up."],
        ["Ga terug naar Safari en open een webpagina", "Ga terug naar de pagina of bezoek een andere HTTP- of HTTPS-website. Was de pagina al open, laad deze dan opnieuw nadat je toegang hebt toegestaan."],
        ["Gebruik de Duskio-pop-up", "Open Duskio in het extensiemenu van Safari. Daar kun je Deze website aan- of uitzetten, Standaard / Compatibiliteit / Veilige modus kiezen en een thema selecteren."]
      ],
      alternate: ["Andere manier: iOS-instellingen", "Je kunt Duskio ook inschakelen via Instellingen: open Instellingen en kies Safari → Extensies → Duskio. Schakel de extensie in en sta toegang tot gekozen websites toe."],
      help: ["Als een webpagina licht blijft", "Controleer of Duskio is ingeschakeld bij Safari-extensies.", "Controleer of toegang is toegestaan voor die website of alle websites.", "Zorg dat Deze website is ingeschakeld in de Duskio-pop-up.", "Controleer Weergave in Duskio: Volg systeem maakt pagina’s alleen donker als het apparaat in donkere modus staat; Altijd licht past nooit donkere thema’s toe.", "Laad de pagina opnieuw."],
      more: "Ziet de pagina er na het donker maken nog verkeerd uit, raadpleeg dan <a href=\"/support/\">Duskio Support</a> voor Compatibiliteit, Veilige modus en Deze site herstellen."
    },
    fr: {
      label: "Langue", eyebrow: "Safari sur iPhone et iPad", title: "Configurer Duskio dans Safari",
      description: "Safari détermine si l’extension est activée et quels sites elle peut restyler. Après ces étapes, Duskio pourra appliquer localement le thème choisi aux pages autorisées.",
      steps: [
        ["Installez et ouvrez Duskio", "Installez Duskio depuis l’App Store, puis ouvrez l’app une fois afin que les instructions et réglages soient disponibles sur l’appareil."],
        ["Ouvrez Safari", "Duskio fonctionne dans Safari. Ouvrez Safari et accédez à la page web que vous souhaitez lire plus confortablement."],
        ["Ouvrez le menu de page ou des extensions", "Dans la barre d’outils ou la zone d’adresse de Safari, ouvrez le menu de la page. Selon votre version d’iOS, il peut s’agir du bouton de réglages de page ou des extensions."],
        ["Ouvrez Gérer les extensions", "Choisissez Gérer les extensions pour voir les extensions web Safari installées sur cet appareil."],
        ["Activez Duskio", "Activez Duskio. Tant que cet interrupteur ne l’est pas, Safari ne charge pas l’extension sur les pages web."],
        ["Autorisez l’accès aux sites", "Safari demande à quels sites l’extension peut accéder. Duskio a besoin de cette autorisation pour modifier l’apparence localement. Aucun contenu de navigation ne nous est envoyé."],
        ["Privilégiez l’accès à tous les sites", "Pour profiter du mode sombre universel, autorisez Duskio sur tous les sites. Vous pourrez toujours le désactiver site par site dans la fenêtre contextuelle."],
        ["Revenez dans Safari et ouvrez une page", "Revenez à la page ou consultez un autre site HTTP ou HTTPS. Si elle était déjà ouverte, rechargez-la après avoir autorisé l’accès."],
        ["Utilisez la fenêtre contextuelle Duskio", "Ouvrez Duskio dans le menu des extensions de Safari. Vous pouvez y activer ou désactiver Ce site web, choisir Standard / Compatibilité / Mode sécurisé et sélectionner un thème."]
      ],
      alternate: ["Autre méthode : Réglages iOS", "Vous pouvez aussi activer Duskio dans Réglages : ouvrez Réglages, puis choisissez Safari → Extensions → Duskio. Activez l’extension et autorisez les sites souhaités."],
      help: ["Si une page reste claire", "Vérifiez que Duskio est activé dans les extensions Safari.", "Vérifiez que l’accès est autorisé pour ce site ou pour tous les sites.", "Vérifiez que Ce site web est activé dans la fenêtre Duskio.", "Vérifiez Apparence dans Duskio : Suivre le système assombrit les pages uniquement quand l’appareil est en mode sombre ; Toujours clair n’applique jamais de thème sombre.", "Rechargez la page."],
      more: "Si la page s’affiche toujours mal une fois assombrie, consultez <a href=\"/support/\">l’assistance Duskio</a> pour Compatibilité, Mode sécurisé et Corriger ce site."
    },
    de: {
      label: "Sprache", eyebrow: "Safari auf iPhone und iPad", title: "Duskio in Safari einrichten",
      description: "Safari steuert, ob die Erweiterung aktiviert ist und welche Websites sie umgestalten darf. Danach kann Duskio das gewählte Theme lokal auf erlaubte Seiten anwenden.",
      steps: [
        ["Duskio installieren und öffnen", "Installiere Duskio aus dem App Store und öffne die App einmal, damit Einrichtungshilfe und Einstellungen auf dem Gerät verfügbar sind."],
        ["Safari öffnen", "Duskio läuft in Safari. Öffne Safari und rufe eine Webseite auf, die du angenehmer lesen möchtest."],
        ["Seiten- oder Erweiterungsmenü öffnen", "Öffne das Seitenmenü in der Symbol- oder Adressleiste von Safari. Je nach iOS-Version erscheint es als Steuerelement für Seiteneinstellungen oder Erweiterungen."],
        ["Erweiterungen verwalten öffnen", "Wähle Erweiterungen verwalten, um die auf diesem Gerät installierten Safari-Web-Erweiterungen zu sehen."],
        ["Duskio aktivieren", "Schalte Duskio ein. Vorher lädt Safari die Erweiterung nicht auf Webseiten."],
        ["Website-Zugriff erlauben", "Safari fragt, auf welche Websites die Erweiterung zugreifen darf. Duskio benötigt diese Berechtigung zur lokalen Darstellung. Browserinhalte werden nicht an uns gesendet."],
        ["Zugriff auf alle Websites bevorzugen", "Erlaube Duskio für den universellen Dunkelmodus auf allen Websites. Einzelne Websites kannst du später im Pop-up deaktivieren."],
        ["Zu Safari zurückkehren und eine Webseite öffnen", "Kehre zur Seite zurück oder besuche eine andere HTTP- oder HTTPS-Website. War die Seite schon geöffnet, lade sie nach der Freigabe neu."],
        ["Das Duskio-Pop-up verwenden", "Öffne Duskio im Erweiterungsmenü von Safari. Dort kannst du Diese Website ein- oder ausschalten, Standard / Kompatibilität / Sicherer Modus wählen und ein Theme festlegen."]
      ],
      alternate: ["Anderer Weg: iOS-Einstellungen", "Du kannst Duskio auch in den Einstellungen aktivieren: Öffne Einstellungen und wähle Safari → Erweiterungen → Duskio. Aktiviere die Erweiterung und den Zugriff auf gewünschte Websites."],
      help: ["Wenn eine Webseite hell bleibt", "Prüfe, ob Duskio in den Safari-Erweiterungen aktiviert ist.", "Prüfe, ob der Zugriff für diese oder alle Websites erlaubt ist.", "Stelle sicher, dass Diese Website im Duskio-Pop-up aktiviert ist.", "Prüfe Darstellung in Duskio: Systemeinstellung folgen dunkelt Seiten nur ab, wenn das Gerät den Dunkelmodus nutzt; Immer hell wendet nie dunkle Themes an.", "Lade die Seite neu."],
      more: "Falls die abgedunkelte Seite weiterhin falsch aussieht, findest du unter <a href=\"/support/\">Duskio Support</a> Hilfe zu Kompatibilität, Sicherem Modus und Diese Website reparieren."
    },
    hu: {
      label: "Nyelv", eyebrow: "Safari iPhone-on és iPaden", title: "A Duskio beállítása a Safariban",
      description: "A Safari szabályozza, hogy a bővítmény engedélyezve van-e, és mely webhelyeket alakíthatja át. Ezután a Duskio helyben alkalmazhatja a kiválasztott témát az engedélyezett oldalakon.",
      steps: [
        ["Telepítse és nyissa meg a Duskiót", "Telepítse a Duskiót az App Store-ból, majd egyszer nyissa meg az appot, hogy elérhetővé váljanak az útmutatók és beállítások."],
        ["Nyissa meg a Safarit", "A Duskio a Safariban működik. Nyissa meg a Safarit, és keressen fel egy kényelmesebben olvasni kívánt weboldalt."],
        ["Nyissa meg az oldal vagy a bővítmények menüjét", "Nyissa meg az oldalmenüt a Safari eszköz- vagy címsávjában. Az iOS verziójától függően oldalbeállítási vagy bővítményvezérlőként jelenhet meg."],
        ["Nyissa meg a Bővítmények kezelése menüt", "Válassza a Bővítmények kezelése lehetőséget az eszközön telepített Safari-bővítmények megtekintéséhez."],
        ["Engedélyezze a Duskiót", "Kapcsolja be a Duskiót. Amíg a kapcsoló nincs bekapcsolva, a Safari nem tölti be a bővítményt a weboldalakon."],
        ["Engedélyezze a webhely-hozzáférést", "A Safari megkérdezi, mely webhelyekhez férhet hozzá a bővítmény. A Duskiónak erre a helyi megjelenítéshez van szüksége; a böngészési tartalom nem jut el hozzánk."],
        ["Lehetőleg minden webhelyhez adjon hozzáférést", "Az általános sötét módhoz engedélyezze a Duskiót minden webhelyen. Egyes webhelyeken később kikapcsolhatja az előugró ablakból."],
        ["Térjen vissza a Safariba, és nyisson meg egy oldalt", "Térjen vissza az oldalra, vagy látogasson meg másik HTTP- vagy HTTPS-webhelyet. Ha az oldal már nyitva volt, a hozzáférés után töltse újra."],
        ["Használja a Duskio előugró ablakát", "Nyissa meg a Duskiót a Safari bővítménymenüjében. Itt kapcsolható az Ez a webhely, választható a Normál / Kompatibilitási / Biztonságos mód és a téma."]
      ],
      alternate: ["Másik lehetőség: iOS-beállítások", "A Duskio a Beállításokból is engedélyezhető: nyissa meg a Beállításokat, majd válassza a Safari → Bővítmények → Duskio útvonalat. Engedélyezze a bővítményt és a kívánt webhelyeket."],
      help: ["Ha a weboldal világos marad", "Ellenőrizze, hogy a Duskio engedélyezve van-e a Safari bővítményei között.", "Ellenőrizze az adott vagy az összes webhely hozzáférését.", "Győződjön meg arról, hogy az Ez a webhely be van kapcsolva a Duskio ablakában.", "Ellenőrizze a Megjelenést: A Rendszer követése csak az eszköz sötét módjában sötétít; a Mindig világos soha nem alkalmaz sötét témát.", "Töltse újra az oldalt."],
      more: "Ha az oldal elsötétítés után sem megfelelő, a <a href=\"/support/\">Duskio támogatás</a> ismerteti a Kompatibilitást, a Biztonságos módot és a Webhely javítását."
    },
    it: {
      label: "Lingua", eyebrow: "Safari su iPhone e iPad", title: "Configurare Duskio in Safari",
      description: "Safari controlla se l’estensione è attiva e quali siti può modificare. Completati questi passaggi, Duskio può applicare localmente il tema scelto alle pagine autorizzate.",
      steps: [
        ["Installa e apri Duskio", "Installa Duskio dall’App Store, quindi apri l’app una volta per rendere disponibili sul dispositivo le istruzioni e le impostazioni."],
        ["Apri Safari", "Duskio funziona in Safari. Apri Safari e visita una pagina web che vuoi leggere più comodamente."],
        ["Apri il menu della pagina o delle estensioni", "Apri il menu della pagina dalla barra degli strumenti o dall’area dell’indirizzo di Safari. In base alla versione di iOS, può apparire come controllo delle impostazioni pagina o delle estensioni."],
        ["Apri Gestisci estensioni", "Scegli Gestisci estensioni per vedere le estensioni web di Safari installate sul dispositivo."],
        ["Abilita Duskio", "Attiva Duskio. Finché l’interruttore non è attivo, Safari non carica l’estensione nelle pagine web."],
        ["Consenti l’accesso ai siti", "Safari chiede a quali siti può accedere l’estensione. Duskio richiede il permesso per modificare localmente l’aspetto; i contenuti di navigazione non vengono inviati a noi."],
        ["Preferisci l’accesso a tutti i siti", "Per la modalità scura universale, consenti Duskio su tutti i siti. Potrai comunque disattivarlo per singoli siti dal popup."],
        ["Torna in Safari e apri una pagina", "Torna alla pagina o visita un altro sito HTTP o HTTPS. Se la pagina era già aperta, ricaricala dopo aver consentito l’accesso."],
        ["Usa il popup di Duskio", "Apri Duskio dal menu delle estensioni di Safari. Qui puoi attivare o disattivare Questo sito web, scegliere Standard / Compatibilità / Modalità sicura e un tema."]
      ],
      alternate: ["Un altro modo: Impostazioni iOS", "Puoi abilitare Duskio anche da Impostazioni: apri Impostazioni, poi scegli Safari → Estensioni → Duskio. Abilita l’estensione e l’accesso ai siti desiderati."],
      help: ["Se una pagina resta chiara", "Verifica che Duskio sia abilitato nelle estensioni di Safari.", "Verifica che l’accesso sia consentito per quel sito o per tutti i siti.", "Assicurati che Questo sito web sia attivo nel popup di Duskio.", "Controlla Aspetto in Duskio: Segui sistema scurisce le pagine solo quando il dispositivo è in modalità scura; Sempre chiaro non applica mai temi scuri.", "Ricarica la pagina."],
      more: "Se la pagina continua a non apparire correttamente dopo essere stata scurita, consulta il <a href=\"/support/\">supporto Duskio</a> per Compatibilità, Modalità sicura e Correggi questo sito."
    },
    ja: {
      label: "言語", eyebrow: "iPhone・iPad の Safari", title: "Safari で Duskio を設定",
      description: "拡張機能を有効にするか、どのサイトの表示を変更できるかは Safari が管理します。次の手順後、Duskio は許可されたページに選択中のテーマを端末内で適用できます。",
      steps: [
        ["Duskio をインストールして開く", "App Store から Duskio をインストールし、一度アプリを開いて、設定ガイドと設定項目を端末で利用できるようにします。"],
        ["Safari を開く", "Duskio は Safari 内で動作します。Safari を開き、読みやすくしたいウェブページに移動します。"],
        ["Safari のページまたは機能拡張メニューを開く", "Safari のツールバーまたはアドレス欄でページメニューを開きます。iOS のバージョンにより、ページ設定または機能拡張のボタンとして表示されます。"],
        ["「機能拡張を管理」を開く", "「機能拡張を管理」を選び、この端末にインストール済みの Safari Web 機能拡張を表示します。"],
        ["Duskio を有効にする", "Duskio をオンにします。このスイッチを有効にするまで、Safari はウェブページで機能拡張を読み込みません。"],
        ["Webサイトへのアクセスを許可する", "Safari で機能拡張がアクセスできるサイトを指定します。Duskio が端末上で表示を変えるために必要な権限です。閲覧内容が当社へ送信されることはありません。"],
        ["すべてのWebサイトへのアクセスを推奨", "汎用ダークモードとして使うには、すべてのWebサイトで Duskio を許可します。個別のサイトでは後からポップアップで無効にできます。"],
        ["Safari に戻ってウェブページを開く", "元のページに戻るか、別の HTTP／HTTPS サイトを開きます。すでに開いていたページは、アクセス許可後に再読み込みします。"],
        ["Duskio のポップアップを使う", "Safari の機能拡張メニューから Duskio を開きます。「このWebサイト」のオン／オフ、標準／互換／セーフモード、テーマを選べます。"]
      ],
      alternate: ["別の方法：iOS の設定", "「設定」からも Duskio を有効にできます。「設定」を開き、Safari → 機能拡張 → Duskio の順に選びます。機能拡張をオンにし、選択したサイトへのアクセスを許可します。"],
      help: ["ウェブページが明るいままの場合", "Safari の機能拡張で Duskio が有効か確認します。", "そのサイトまたはすべてのサイトへのアクセスが許可されているか確認します。", "Duskio ポップアップで「このWebサイト」が有効か確認します。", "Duskio アプリの「外観」を確認します。「システムに合わせる」は端末がダークモードのときだけ暗くし、「常にライト」はダークテーマを適用しません。", "ページを再読み込みします。"],
      more: "暗くなっても表示がおかしい場合は、<a href=\"/support/\">Duskio サポート</a>で互換モード、セーフモード、「このサイトを修正」をご覧ください。"
    },
    ko: {
      label: "언어", eyebrow: "iPhone 및 iPad의 Safari", title: "Safari에서 Duskio 설정",
      description: "Safari는 확장 프로그램 활성화 여부와 스타일을 변경할 수 있는 웹사이트를 관리합니다. 아래 단계를 마치면 Duskio가 허용된 페이지에 선택한 테마를 기기에서 적용할 수 있습니다.",
      steps: [
        ["Duskio 설치 및 열기", "App Store에서 Duskio를 설치한 다음 앱을 한 번 열어 설정 안내와 옵션을 기기에서 사용할 수 있게 합니다."],
        ["Safari 열기", "Duskio는 Safari 안에서 작동합니다. Safari를 열고 더 편하게 읽고 싶은 웹페이지로 이동하세요."],
        ["Safari의 페이지 또는 확장 프로그램 메뉴 열기", "Safari 도구 막대나 주소 영역에서 페이지 메뉴를 여세요. iOS 버전에 따라 페이지 설정 또는 확장 프로그램 제어 버튼으로 표시될 수 있습니다."],
        ["확장 프로그램 관리 열기", "확장 프로그램 관리를 선택하여 이 기기에 설치된 Safari 웹 확장 프로그램을 확인하세요."],
        ["Duskio 활성화", "Duskio를 켜세요. 이 스위치를 켜기 전에는 Safari가 웹페이지에서 확장 프로그램을 불러오지 않습니다."],
        ["웹사이트 접근 허용", "Safari가 확장 프로그램이 접근할 웹사이트를 묻습니다. Duskio가 기기에서 페이지 모양을 바꾸는 데 필요한 권한이며, 탐색 내용은 당사로 전송되지 않습니다."],
        ["모든 웹사이트 접근 권장", "범용 다크 모드를 사용하려면 모든 웹사이트에서 Duskio를 허용하세요. 나중에 팝업에서 개별 사이트를 끌 수 있습니다."],
        ["Safari로 돌아가 웹페이지 열기", "페이지로 돌아가거나 다른 HTTP 또는 HTTPS 사이트를 방문하세요. 페이지가 이미 열려 있었다면 접근을 허용한 뒤 새로 고치세요."],
        ["Duskio 팝업 사용", "Safari 확장 프로그램 메뉴에서 Duskio를 여세요. ‘이 웹사이트’를 켜거나 끄고, 표준 / 호환 / 안전 모드와 테마를 선택할 수 있습니다."]
      ],
      alternate: ["다른 방법: iOS 설정", "설정에서도 Duskio를 활성화할 수 있습니다. 설정을 열고 Safari → 확장 프로그램 → Duskio를 선택한 뒤, 확장 프로그램과 원하는 웹사이트 접근을 허용하세요."],
      help: ["웹페이지가 계속 밝게 표시되는 경우", "Safari 확장 프로그램에서 Duskio가 활성화되어 있는지 확인하세요.", "해당 사이트 또는 모든 사이트에 접근이 허용됐는지 확인하세요.", "Duskio 팝업에서 ‘이 웹사이트’가 켜져 있는지 확인하세요.", "Duskio 앱의 ‘모양’을 확인하세요. ‘시스템 설정 따르기’는 기기가 다크 모드일 때만 페이지를 어둡게 하며, ‘항상 라이트’는 다크 테마를 적용하지 않습니다.", "페이지를 새로 고치세요."],
      more: "어두워진 뒤에도 페이지가 잘못 보이면 <a href=\"/support/\">Duskio 지원</a>에서 호환 모드, 안전 모드, ‘이 사이트 수정’을 확인하세요."
    },
    lt: {
      label: "Kalba", eyebrow: "Safari iPhone ir iPad įrenginiuose", title: "Duskio nustatymas naršyklėje Safari",
      description: "Safari valdo, ar plėtinys įjungtas ir kurių svetainių išvaizdą jis gali keisti. Atlikus šiuos veiksmus, Duskio pasirinktą temą leidžiamuose puslapiuose pritaikys vietoje.",
      steps: [
        ["Įdiekite ir atidarykite Duskio", "Įdiekite Duskio iš App Store, tada kartą atidarykite programą, kad įrenginyje būtų pasiekiamos sąrankos gairės ir nuostatos."],
        ["Atidarykite Safari", "Duskio veikia Safari naršyklėje. Atidarykite Safari ir eikite į norimą patogiau skaityti puslapį."],
        ["Atidarykite puslapio arba plėtinių meniu", "Safari įrankių juostoje ar adreso srityje atidarykite puslapio meniu. Atsižvelgiant į iOS versiją, jis gali būti rodomas kaip puslapio nuostatų arba plėtinių valdiklis."],
        ["Atidarykite Tvarkyti plėtinius", "Pasirinkite Tvarkyti plėtinius, kad pamatytumėte šiame įrenginyje įdiegtus Safari žiniatinklio plėtinius."],
        ["Įjunkite Duskio", "Įjunkite Duskio. Kol jungiklis neįjungtas, Safari plėtinio tinklalapiuose neįkels."],
        ["Leiskite prieigą prie svetainių", "Safari klausia, kurias svetaines plėtinys gali pasiekti. Duskio reikia leidimo vietoje keisti išvaizdą; naršymo turinys mums nesiunčiamas."],
        ["Leiskite prieigą prie visų svetainių", "Universaliam tamsiam režimui leiskite Duskio veikti visose svetainėse. Atskirose svetainėse jį vėliau galėsite išjungti iškylančiajame lange."],
        ["Grįžkite į Safari ir atidarykite puslapį", "Grįžkite į puslapį arba apsilankykite kitoje HTTP ar HTTPS svetainėje. Jei puslapis jau buvo atidarytas, suteikę prieigą įkelkite jį iš naujo."],
        ["Naudokite Duskio iškylantįjį langą", "Atidarykite Duskio Safari plėtinių meniu. Galite įjungti ar išjungti Šią svetainę, pasirinkti Standartinį / Suderinamumo / Saugųjį režimą ir temą."]
      ],
      alternate: ["Kitas būdas: iOS nuostatos", "Duskio taip pat galite įjungti Nuostatose: atidarykite Nuostatas, pasirinkite Safari → Plėtiniai → Duskio. Įjunkite plėtinį ir prieigą prie pasirinktų svetainių."],
      help: ["Jei tinklalapis lieka šviesus", "Patikrinkite, ar Duskio įjungtas Safari plėtiniuose.", "Patikrinkite, ar suteikta prieiga prie tos arba visų svetainių.", "Įsitikinkite, kad Duskio lange įjungta Ši svetainė.", "Patikrinkite Duskio Išvaizdą: Sekti sistemą tamsina tik įrenginiui veikiant tamsiu režimu; Visada šviesi tamsių temų netaiko.", "Įkelkite puslapį iš naujo."],
      more: "Jei patamsintas puslapis vis tiek atrodo netinkamai, <a href=\"/support/\">Duskio pagalboje</a> skaitykite apie Suderinamumą, Saugųjį režimą ir Svetainės taisymą."
    },
    fi: {
      label: "Kieli", eyebrow: "Safari iPhonessa ja iPadissa", title: "Duskion käyttöönotto Safarissa",
      description: "Safari hallitsee laajennuksen käyttöönottoa ja sitä, minkä sivustojen tyyliä se saa muuttaa. Näiden vaiheiden jälkeen Duskio voi käyttää valittua teemaa paikallisesti sallituilla sivuilla.",
      steps: [
        ["Asenna ja avaa Duskio", "Asenna Duskio App Storesta ja avaa sovellus kerran, jotta käyttöönotto-ohjeet ja asetukset ovat käytettävissä laitteella."],
        ["Avaa Safari", "Duskio toimii Safarissa. Avaa Safari ja siirry verkkosivulle, jota haluat lukea mukavammin."],
        ["Avaa Safarin sivu- tai laajennusvalikko", "Avaa sivuvalikko Safarin työkalupalkissa tai osoitealueella. iOS-versiosta riippuen se voi näkyä sivuasetusten tai laajennusten säätimenä."],
        ["Avaa Hallitse laajennuksia", "Valitse Hallitse laajennuksia nähdäksesi laitteeseen asennetut Safari-verkkolaajennukset."],
        ["Ota Duskio käyttöön", "Kytke Duskio päälle. Safari ei lataa laajennusta verkkosivuilla ennen kuin kytkin on käytössä."],
        ["Salli pääsy verkkosivustoille", "Safari kysyy, mille sivustoille laajennus saa pääsyn. Duskio tarvitsee luvan ulkoasun muuttamiseen paikallisesti. Selaussisältöä ei lähetetä meille."],
        ["Salli mieluiten kaikki verkkosivustot", "Salli Duskio kaikilla sivustoilla yleistä tummaa tilaa varten. Voit myöhemmin poistaa sen käytöstä yksittäisillä sivustoilla ponnahdusikkunasta."],
        ["Palaa Safariin ja avaa verkkosivu", "Palaa sivulle tai käy toisella HTTP- tai HTTPS-sivustolla. Jos sivu oli jo auki, lataa se uudelleen luvan antamisen jälkeen."],
        ["Käytä Duskion ponnahdusikkunaa", "Avaa Duskio Safarin laajennusvalikosta. Siellä voit ottaa Tämän verkkosivuston käyttöön tai pois käytöstä, valita Vakio / Yhteensopivuus / Turvallinen tila ja teeman."]
      ],
      alternate: ["Toinen tapa: iOS-asetukset", "Voit ottaa Duskion käyttöön myös Asetuksissa: avaa Asetukset ja valitse Safari → Laajennukset → Duskio. Ota laajennus käyttöön ja salli valitsemasi sivustot."],
      help: ["Jos verkkosivu pysyy vaaleana", "Tarkista, että Duskio on käytössä Safarin laajennuksissa.", "Tarkista, että pääsy on sallittu kyseiselle tai kaikille sivustoille.", "Varmista, että Tämä verkkosivusto on käytössä Duskion ikkunassa.", "Tarkista Duskion Ulkoasu: Seuraa järjestelmää tummentaa sivut vain laitteen tummassa tilassa; Aina vaalea ei koskaan käytä tummia teemoja.", "Lataa sivu uudelleen."],
      more: "Jos sivu näyttää tummentamisen jälkeen yhä väärältä, katso <a href=\"/support/\">Duskio-tuesta</a> ohjeet Yhteensopivuuteen, Turvalliseen tilaan ja Sivuston korjaamiseen."
    },
    ms: {
      label: "Bahasa", eyebrow: "Safari pada iPhone dan iPad", title: "Sediakan Duskio dalam Safari",
      description: "Safari mengawal sama ada sambungan didayakan dan laman web yang boleh digayakan semula. Selepas langkah ini, Duskio boleh menggunakan tema pilihan secara setempat pada halaman yang dibenarkan.",
      steps: [
        ["Pasang dan buka Duskio", "Pasang Duskio daripada App Store, kemudian buka aplikasi sekali supaya panduan persediaan dan tetapan tersedia pada peranti."],
        ["Buka Safari", "Duskio berfungsi dalam Safari. Buka Safari dan pergi ke mana-mana halaman web yang mahu dibaca dengan lebih selesa."],
        ["Buka menu halaman atau sambungan Safari", "Buka menu halaman dalam bar alat atau ruang alamat Safari. Bergantung pada versi iOS, ia mungkin kelihatan sebagai kawalan tetapan halaman atau sambungan."],
        ["Buka Urus Sambungan", "Pilih Urus Sambungan untuk melihat sambungan web Safari yang dipasang pada peranti ini."],
        ["Dayakan Duskio", "Hidupkan Duskio. Selagi suis ini belum didayakan, Safari tidak akan memuatkan sambungan pada halaman web."],
        ["Benarkan akses laman web", "Safari bertanya laman web yang boleh diakses oleh sambungan. Duskio memerlukan kebenaran ini untuk mengubah rupa secara setempat. Kandungan pelayaran tidak dihantar kepada kami."],
        ["Utamakan akses kepada semua laman web", "Untuk mod gelap sejagat, benarkan Duskio pada semua laman web. Anda masih boleh melumpuhkannya bagi laman tertentu kemudian melalui tetingkap timbul."],
        ["Kembali ke Safari dan buka halaman web", "Kembali ke halaman atau lawati laman HTTP atau HTTPS lain. Jika halaman sudah dibuka, muatkan semula selepas membenarkan akses."],
        ["Gunakan tetingkap timbul Duskio", "Buka Duskio dalam menu sambungan Safari. Di situ anda boleh menghidupkan atau mematikan Laman Web Ini, memilih Standard / Keserasian / Mod Selamat dan tema."]
      ],
      alternate: ["Cara lain: Tetapan iOS", "Anda juga boleh mendayakan Duskio dalam Tetapan: buka Tetapan, kemudian pilih Safari → Sambungan → Duskio. Dayakan sambungan dan akses kepada laman yang anda pilih."],
      help: ["Jika halaman web kekal cerah", "Sahkan Duskio didayakan dalam Sambungan Safari.", "Sahkan akses diberikan untuk laman itu atau semua laman web.", "Pastikan Laman Web Ini didayakan dalam tetingkap Duskio.", "Semak Penampilan dalam Duskio: Ikut Sistem hanya menggelapkan halaman apabila peranti dalam Mod Gelap; Sentiasa Cerah tidak menggunakan tema gelap.", "Muatkan semula halaman."],
      more: "Jika halaman masih kelihatan salah selepas digelapkan, lihat <a href=\"/support/\">Sokongan Duskio</a> untuk Keserasian, Mod Selamat dan Baiki Laman Ini."
    },
    nb: {
      label: "Språk", eyebrow: "Safari på iPhone og iPad", title: "Konfigurer Duskio i Safari",
      description: "Safari styrer om utvidelsen er aktivert, og hvilke nettsteder den kan endre. Etter disse trinnene kan Duskio bruke det valgte temaet lokalt på tillatte sider.",
      steps: [
        ["Installer og åpne Duskio", "Installer Duskio fra App Store, og åpne appen én gang slik at oppsettveiledning og innstillinger er tilgjengelige på enheten."],
        ["Åpne Safari", "Duskio fungerer i Safari. Åpne Safari og gå til en nettside du vil lese mer behagelig."],
        ["Åpne Safaris side- eller utvidelsesmeny", "Åpne sidemenyen i Safaris verktøylinje eller adresseområde. Avhengig av iOS-versjonen kan den vises som en kontroll for sideinnstillinger eller utvidelser."],
        ["Åpne Administrer utvidelser", "Velg Administrer utvidelser for å se Safari-nettutvidelsene som er installert på enheten."],
        ["Aktiver Duskio", "Slå på Duskio. Safari laster ikke utvidelsen på nettsider før denne bryteren er aktivert."],
        ["Tillat tilgang til nettsteder", "Safari spør hvilke nettsteder utvidelsen kan få tilgang til. Duskio trenger tillatelsen for å endre utseendet lokalt. Nettleserinnhold sendes ikke til oss."],
        ["Tillat helst alle nettsteder", "Tillat Duskio på alle nettsteder for universell mørk modus. Du kan senere deaktivere Duskio på enkeltnettsteder fra sprettoppvinduet."],
        ["Gå tilbake til Safari og åpne en nettside", "Gå tilbake til siden, eller besøk et annet HTTP- eller HTTPS-nettsted. Hvis siden allerede var åpen, last den inn på nytt etter tillatelsen."],
        ["Bruk Duskio-sprettoppvinduet", "Åpne Duskio i Safaris utvidelsesmeny. Der kan du slå Dette nettstedet av eller på, velge Standard / Kompatibilitet / Sikker modus og et tema."]
      ],
      alternate: ["En annen måte: iOS-innstillinger", "Du kan også aktivere Duskio i Innstillinger: åpne Innstillinger og velg Safari → Utvidelser → Duskio. Aktiver utvidelsen og tilgang til valgte nettsteder."],
      help: ["Hvis en nettside forblir lys", "Kontroller at Duskio er aktivert under Safari-utvidelser.", "Kontroller at tilgang er gitt for dette eller alle nettsteder.", "Sørg for at Dette nettstedet er aktivert i Duskio-vinduet.", "Kontroller Utseende i Duskio: Følg systemet gjør bare sider mørke når enheten er i mørk modus; Alltid lys bruker aldri mørke temaer.", "Last inn siden på nytt."],
      more: "Hvis siden fortsatt ser feil ut etter at den er mørk, kan du se <a href=\"/support/\">Duskio-kundestøtte</a> om Kompatibilitet, Sikker modus og Fiks dette nettstedet."
    },
    sv: {
      label: "Språk", eyebrow: "Safari på iPhone och iPad", title: "Konfigurera Duskio i Safari",
      description: "Safari styr om tillägget är aktiverat och vilka webbplatser det får ändra. Efter dessa steg kan Duskio använda det valda temat lokalt på tillåtna sidor.",
      steps: [
        ["Installera och öppna Duskio", "Installera Duskio från App Store och öppna appen en gång så att installationshjälp och inställningar finns på enheten."],
        ["Öppna Safari", "Duskio fungerar i Safari. Öppna Safari och gå till en webbsida som du vill läsa bekvämare."],
        ["Öppna Safaris sid- eller tilläggsmeny", "Öppna sidmenyn i Safaris verktygsfält eller adressområde. Beroende på iOS-version kan den visas som ett reglage för sidinställningar eller tillägg."],
        ["Öppna Hantera tillägg", "Välj Hantera tillägg för att se Safari-webbtilläggen som är installerade på enheten."],
        ["Aktivera Duskio", "Slå på Duskio. Safari läser inte in tillägget på webbsidor förrän reglaget har aktiverats."],
        ["Tillåt åtkomst till webbplatser", "Safari frågar vilka webbplatser tillägget får komma åt. Duskio behöver tillståndet för att ändra utseendet lokalt. Webbinnehåll skickas inte till oss."],
        ["Tillåt helst alla webbplatser", "Tillåt Duskio på alla webbplatser för ett universellt mörkt läge. Du kan senare stänga av Duskio på enskilda webbplatser från popupfönstret."],
        ["Gå tillbaka till Safari och öppna en webbsida", "Gå tillbaka till sidan eller besök en annan HTTP- eller HTTPS-webbplats. Om sidan redan var öppen läser du in den igen efter tillståndet."],
        ["Använd Duskios popupfönster", "Öppna Duskio i Safaris tilläggsmeny. Där kan du slå Den här webbplatsen av eller på, välja Standard / Kompatibilitet / Säkert läge och ett tema."]
      ],
      alternate: ["Ett annat sätt: iOS-inställningar", "Du kan även aktivera Duskio i Inställningar: öppna Inställningar och välj Safari → Tillägg → Duskio. Aktivera tillägget och åtkomst till valda webbplatser."],
      help: ["Om en webbsida förblir ljus", "Kontrollera att Duskio är aktiverat under Safari-tillägg.", "Kontrollera att åtkomst har beviljats för den eller alla webbplatser.", "Se till att Den här webbplatsen är aktiverad i Duskio-fönstret.", "Kontrollera Utseende i Duskio: Följ systemet gör bara sidor mörka när enheten har mörkt läge; Alltid ljust använder aldrig mörka teman.", "Läs in sidan igen."],
      more: "Om sidan fortfarande ser fel ut efter att den blivit mörk, se <a href=\"/support/\">Duskio-support</a> om Kompatibilitet, Säkert läge och Fixa den här webbplatsen."
    },
    th: {
      label: "ภาษา", eyebrow: "Safari บน iPhone และ iPad", title: "ตั้งค่า Duskio ใน Safari",
      description: "Safari ควบคุมการเปิดใช้ส่วนขยายและเว็บไซต์ที่ส่วนขยายปรับรูปแบบได้ หลังจากทำตามขั้นตอนนี้ Duskio จะใช้ธีมที่เลือกกับหน้าที่อนุญาตภายในอุปกรณ์",
      steps: [
        ["ติดตั้งและเปิด Duskio", "ติดตั้ง Duskio จาก App Store แล้วเปิดแอปหนึ่งครั้ง เพื่อให้คำแนะนำการตั้งค่าและตัวเลือกพร้อมใช้งานบนอุปกรณ์"],
        ["เปิด Safari", "Duskio ทำงานภายใน Safari เปิด Safari แล้วไปยังหน้าเว็บที่คุณต้องการอ่านได้สบายตาขึ้น"],
        ["เปิดเมนูหน้าหรือส่วนขยายของ Safari", "เปิดเมนูหน้าจากแถบเครื่องมือหรือบริเวณที่อยู่ของ Safari ปุ่มอาจแสดงเป็นการตั้งค่าหน้าหรือส่วนขยายตามเวอร์ชัน iOS"],
        ["เปิดจัดการส่วนขยาย", "เลือกจัดการส่วนขยายเพื่อดูส่วนขยายเว็บ Safari ที่ติดตั้งในอุปกรณ์นี้"],
        ["เปิดใช้ Duskio", "เปิด Duskio โดย Safari จะไม่โหลดส่วนขยายบนหน้าเว็บจนกว่าจะเปิดสวิตช์นี้"],
        ["อนุญาตการเข้าถึงเว็บไซต์", "Safari จะถามว่าส่วนขยายเข้าถึงเว็บไซต์ใดได้ Duskio ต้องใช้สิทธิ์นี้เพื่อปรับหน้าตาภายในอุปกรณ์ เนื้อหาการท่องเว็บจะไม่ถูกส่งถึงเรา"],
        ["แนะนำให้อนุญาตทุกเว็บไซต์", "เพื่อใช้โหมดมืดแบบครอบคลุม ให้อนุญาต Duskio ในทุกเว็บไซต์ คุณยังปิดใช้กับแต่ละเว็บไซต์ภายหลังจากหน้าต่างป๊อปอัปได้"],
        ["กลับไปที่ Safari แล้วเปิดหน้าเว็บ", "กลับไปยังหน้าเดิมหรือไปที่เว็บไซต์ HTTP หรือ HTTPS อื่น หากหน้าเปิดอยู่แล้ว ให้โหลดใหม่หลังอนุญาตการเข้าถึง"],
        ["ใช้หน้าต่างป๊อปอัป Duskio", "เปิด Duskio จากเมนูส่วนขยาย Safari จากนั้นเปิดหรือปิดเว็บไซต์นี้ เลือกมาตรฐาน / ความเข้ากันได้ / โหมดปลอดภัย และเลือกธีมได้"]
      ],
      alternate: ["อีกวิธี: การตั้งค่า iOS", "คุณเปิดใช้ Duskio จากการตั้งค่าได้เช่นกัน: เปิดการตั้งค่า แล้วเลือก Safari → ส่วนขยาย → Duskio จากนั้นเปิดส่วนขยายและอนุญาตเว็บไซต์ที่เลือก"],
      help: ["หากหน้าเว็บยังเป็นสีสว่าง", "ตรวจสอบว่าเปิด Duskio ในส่วนขยาย Safari แล้ว", "ตรวจสอบว่าอนุญาตการเข้าถึงเว็บไซต์นั้นหรือทุกเว็บไซต์แล้ว", "ตรวจสอบว่าเปิดเว็บไซต์นี้ในหน้าต่าง Duskio แล้ว", "ตรวจสอบลักษณะที่ปรากฏใน Duskio: ตามระบบจะทำให้หน้ามืดเฉพาะเมื่ออุปกรณ์อยู่ในโหมดมืด ส่วนสว่างเสมอจะไม่ใช้ธีมมืด", "โหลดหน้าใหม่"],
      more: "หากหน้าจอยังดูผิดปกติหลังเปลี่ยนเป็นโหมดมืด โปรดดู <a href=\"/support/\">บริการช่วยเหลือ Duskio</a> เรื่องความเข้ากันได้ โหมดปลอดภัย และแก้ไขเว็บไซต์นี้"
    },
    tr: {
      label: "Dil", eyebrow: "iPhone ve iPad’de Safari", title: "Safari’de Duskio’yu Ayarlama",
      description: "Safari, eklentinin etkin olup olmadığını ve hangi siteleri yeniden biçimlendirebileceğini yönetir. Bu adımlardan sonra Duskio, seçtiğiniz temayı izin verilen sayfalara yerel olarak uygulayabilir.",
      steps: [
        ["Duskio’yu yükleyin ve açın", "Duskio’yu App Store’dan yükleyin, ardından kurulum rehberi ve ayarların aygıtta kullanılabilmesi için uygulamayı bir kez açın."],
        ["Safari’yi açın", "Duskio, Safari’nin içinde çalışır. Safari’yi açın ve daha rahat okumak istediğiniz bir web sayfasına gidin."],
        ["Safari’nin sayfa veya eklenti menüsünü açın", "Safari araç çubuğunda veya adres alanında sayfa menüsünü açın. iOS sürümünüze göre sayfa ayarları ya da eklentiler denetimi olarak görünebilir."],
        ["Eklentileri Yönet’i açın", "Bu aygıtta yüklü Safari web eklentilerini görmek için Eklentileri Yönet’i seçin."],
        ["Duskio’yu etkinleştirin", "Duskio’yu açın. Bu anahtar etkinleştirilene kadar Safari eklentiyi web sayfalarında yüklemez."],
        ["Web sitesi erişimine izin verin", "Safari, eklentinin hangi sitelere erişebileceğini sorar. Duskio’nun görünümü yerel olarak değiştirebilmesi için bu izin gerekir. Tarama içeriği bize gönderilmez."],
        ["Tüm web sitelerine erişimi tercih edin", "Evrensel koyu mod için Duskio’ya tüm sitelerde izin verin. Daha sonra açılır pencereden tek tek siteler için kapatabilirsiniz."],
        ["Safari’ye dönüp bir web sayfası açın", "Sayfaya dönün veya başka bir HTTP ya da HTTPS sitesini ziyaret edin. Sayfa zaten açıksa izin verdikten sonra yeniden yükleyin."],
        ["Duskio açılır penceresini kullanın", "Safari’nin eklenti menüsünden Duskio’yu açın. Buradan Bu Web Sitesi’ni açıp kapatabilir, Standart / Uyumluluk / Güvenli Mod ve tema seçebilirsiniz."]
      ],
      alternate: ["Başka bir yol: iOS Ayarları", "Duskio’yu Ayarlar’dan da etkinleştirebilirsiniz: Ayarlar’ı açıp Safari → Eklentiler → Duskio’yu seçin. Eklentiyi ve seçtiğiniz sitelere erişimi etkinleştirin."],
      help: ["Bir web sayfası açık renk kalırsa", "Safari Eklentileri’nde Duskio’nun etkin olduğunu doğrulayın.", "O site veya tüm siteler için erişim verildiğini doğrulayın.", "Duskio açılır penceresinde Bu Web Sitesi’nin etkin olduğundan emin olun.", "Duskio’da Görünüm’ü kontrol edin: Sistemi İzle yalnızca aygıt Koyu Mod’dayken sayfaları koyulaştırır; Her Zaman Açık hiçbir zaman koyu tema uygulamaz.", "Sayfayı yeniden yükleyin."],
      more: "Sayfa koyulaştıktan sonra hâlâ yanlış görünüyorsa Uyumluluk, Güvenli Mod ve Bu Siteyi Düzelt için <a href=\"/support/\">Duskio Destek</a> sayfasına bakın."
    },
    el: {
      label: "Γλώσσα", eyebrow: "Safari σε iPhone και iPad", title: "Ρύθμιση του Duskio στο Safari",
      description: "Το Safari ελέγχει αν η επέκταση είναι ενεργή και ποιους ιστότοπους μπορεί να αλλάξει. Μετά από αυτά τα βήματα, το Duskio μπορεί να εφαρμόζει το επιλεγμένο θέμα τοπικά στις επιτρεπόμενες σελίδες.",
      steps: [
        ["Εγκαταστήστε και ανοίξτε το Duskio", "Εγκαταστήστε το Duskio από το App Store και ανοίξτε την εφαρμογή μία φορά, ώστε οι οδηγίες και οι ρυθμίσεις να είναι διαθέσιμες στη συσκευή."],
        ["Ανοίξτε το Safari", "Το Duskio λειτουργεί μέσα στο Safari. Ανοίξτε το Safari και μεταβείτε σε μια ιστοσελίδα που θέλετε να διαβάσετε πιο άνετα."],
        ["Ανοίξτε το μενού σελίδας ή επεκτάσεων", "Στη γραμμή εργαλείων ή διεύθυνσης του Safari, ανοίξτε το μενού σελίδας. Ανάλογα με την έκδοση iOS, μπορεί να εμφανίζεται ως χειριστήριο ρυθμίσεων σελίδας ή επεκτάσεων."],
        ["Ανοίξτε τη Διαχείριση επεκτάσεων", "Επιλέξτε Διαχείριση επεκτάσεων για να δείτε τις επεκτάσεις web του Safari που είναι εγκατεστημένες στη συσκευή."],
        ["Ενεργοποιήστε το Duskio", "Ενεργοποιήστε το Duskio. Μέχρι να ενεργοποιηθεί ο διακόπτης, το Safari δεν θα φορτώνει την επέκταση στις ιστοσελίδες."],
        ["Επιτρέψτε την πρόσβαση σε ιστότοπους", "Το Safari ρωτά σε ποιους ιστότοπους μπορεί να έχει πρόσβαση η επέκταση. Το Duskio χρειάζεται την άδεια για τοπική αλλαγή εμφάνισης. Το περιεχόμενο περιήγησης δεν αποστέλλεται σε εμάς."],
        ["Προτιμήστε πρόσβαση σε όλους τους ιστότοπους", "Για καθολική σκοτεινή λειτουργία, επιτρέψτε το Duskio σε όλους τους ιστότοπους. Μπορείτε αργότερα να το απενεργοποιήσετε σε μεμονωμένους ιστότοπους από το αναδυόμενο παράθυρο."],
        ["Επιστρέψτε στο Safari και ανοίξτε μια σελίδα", "Επιστρέψτε στη σελίδα ή επισκεφθείτε άλλο ιστότοπο HTTP ή HTTPS. Αν η σελίδα ήταν ήδη ανοικτή, επαναφορτώστε την αφού επιτρέψετε την πρόσβαση."],
        ["Χρησιμοποιήστε το αναδυόμενο παράθυρο Duskio", "Ανοίξτε το Duskio από το μενού επεκτάσεων του Safari. Εκεί μπορείτε να ενεργοποιήσετε ή να απενεργοποιήσετε το Αυτός ο ιστότοπος, να επιλέξετε Τυπική / Συμβατότητα / Ασφαλή λειτουργία και θέμα."]
      ],
      alternate: ["Άλλος τρόπος: Ρυθμίσεις iOS", "Μπορείτε επίσης να ενεργοποιήσετε το Duskio από τις Ρυθμίσεις: ανοίξτε Ρυθμίσεις και επιλέξτε Safari → Επεκτάσεις → Duskio. Ενεργοποιήστε την επέκταση και την πρόσβαση στους ιστότοπους που θέλετε."],
      help: ["Αν μια ιστοσελίδα παραμένει φωτεινή", "Επαληθεύστε ότι το Duskio είναι ενεργό στις επεκτάσεις Safari.", "Επαληθεύστε ότι επιτρέπεται η πρόσβαση σε αυτόν ή σε όλους τους ιστότοπους.", "Βεβαιωθείτε ότι το Αυτός ο ιστότοπος είναι ενεργό στο παράθυρο Duskio.", "Ελέγξτε την Εμφάνιση στο Duskio: Ακολούθηση συστήματος σκουραίνει μόνο όταν η συσκευή είναι σε σκοτεινή λειτουργία· Πάντα φωτεινό δεν εφαρμόζει ποτέ σκοτεινά θέματα.", "Επαναφορτώστε τη σελίδα."],
      more: "Αν η σελίδα εξακολουθεί να φαίνεται λάθος αφού σκουρύνει, δείτε την <a href=\"/support/\">Υποστήριξη Duskio</a> για Συμβατότητα, Ασφαλή λειτουργία και Διόρθωση αυτού του ιστότοπου."
    }
  };

  const content = document.querySelector(".setup-page-content");
  const select = document.getElementById("setup-language");
  if (!content || !select) return;

  const supported = Object.keys(translations);

  function detectLanguage() {
    const candidates = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];

    for (const candidate of candidates) {
      if (!candidate) continue;
      const normalized = candidate.replace("_", "-");
      const exact = supported.find((code) => code.toLowerCase() === normalized.toLowerCase());
      if (exact) return exact;

      const base = normalized.split("-")[0].toLowerCase();
      const aliases = { zh: "zh-Hans", pt: "pt-BR", no: "nb" };
      if (aliases[base]) return aliases[base];
      const baseMatch = supported.find((code) => code.toLowerCase() === base);
      if (baseMatch) return baseMatch;
    }
    return "en";
  }

  function storedLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return supported.includes(stored) ? stored : null;
    } catch (_error) {
      return null;
    }
  }

  function setText(key, value) {
    const node = content.querySelector(`[data-i18n="${key}"]`);
    if (node) node.textContent = value;
  }

  function applyLanguage(language) {
    const copy = translations[language] || translations.en;
    content.setAttribute("lang", language);
    content.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    select.value = language;

    setText("languageLabel", copy.label);
    setText("eyebrow", copy.eyebrow);
    setText("title", copy.title);
    setText("description", copy.description);

    copy.steps.forEach(([stepTitle, stepText], index) => {
      const number = index + 1;
      setText(`step${number}Title`, `${number}. ${stepTitle}`);
      setText(`step${number}Text`, stepText);
      setText(`step${number}Caption`, stepTitle);
      const image = content.querySelector(`.setup-step:nth-child(${number}) img`);
      if (image) image.alt = stepTitle;
    });

    setText("alternateTitle", copy.alternate[0]);
    setText("alternateText", copy.alternate[1]);
    setText("helpTitle", copy.help[0]);
    for (let index = 1; index <= 5; index += 1) {
      setText(`help${index}`, copy.help[index]);
    }
    const more = content.querySelector('[data-i18n-html="helpMore"]');
    if (more) more.innerHTML = copy.more;
  }

  const initialLanguage = storedLanguage() || detectLanguage();
  applyLanguage(initialLanguage);

  select.addEventListener("change", () => {
    const language = supported.includes(select.value) ? select.value : "en";
    applyLanguage(language);
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // The selected language still applies when storage is unavailable.
    }
  });
})();
