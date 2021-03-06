---
forceTheme: red
---
# Intel-PC ga o'rnatish
## Kompyuter yig'ish va qismlar to'g'ri kelishini tekshirish
* **Protsessor**: albatta Intel (AMD kabi boshqa variantlar ham bor, lekin bular hammasi intel uchun yaratilgan va bunga arzimaydi)
* **Videokarta**: hozirgi paytda hohlagan video kartani olish mumkin (ba'zilaridan tashqari).
* **Ona plata**: ba'zida X\*-chipsetdagi ona plata bilan muammolar bo'ladi.
* **Audio**: deyarli hammasi ishlaydi, ba'zi birlari bilan kelishmaydi.
* **Aloqa (internet)**: hammasi ishlaydi, xitoylik ismsiz LAN-karta lardan tashqari .
* **Bluetooth va Wi-Fi**: [jadval ko'rish](/uz/guides/bw.md).
## BIOS Legacy va BIOS UEFI to'g'irlash
* **CSM**: На современных платах и видеокартах при использовании исключительно UEFI-загрузки рекомедуется его выключать.
* **Secure Boot**: Other OS (UEFI).
* **SATA**: Обязательно поставить режим AHCI.
* **HPET**: Yoqiq tursin.
* **Fast Boot** и **Hardware Fast Boot**: O'chirib qo'yilsin.
* **Above 4G Decoding**: Yoqiq tursin.
* USB 3.0 va 3.1 muammolardan holis bo'lish uchun o'chirib qo'yamiz 
* Serial-portlar va boshqa ishlatilmaydigan interfeyslarni o'chirib qo'yamiz
* Bluetooth o'chirib qo'yamiz.
### Примечания:
* На сборках с двумя CPU требуется поставить двухядерный режим на обоих CPU.
* Видеокарта должна быть на время установки одна и установлена в первый слот.
* Отключить все мониторы, кроме основного.

## Clover
**Clover** - это загрузчик, который позволяет на обычном компьютере запустить **macOS**. **Apple** этого делать не разрешает, в первую очередь мотивируя тем, что “мы не можем обеспечить работоспособность на компьютерах, произведенными не компанией **Apple**”. Поэтому ставим систему на свой страх и риск.

## config.plist
Этот файл используется для настройки загрузчика **Clover**. Он - основа всего, то, что заставить вашу систему работать правильно.
**Clover** умеет генерировать файл конфигурации (далее - **конфиг**), основанный на вашем "железе" самостоятельно, но как вы знаете, нет ничего идеального. Поэтому у пользователя есть возможность менять параметры "конфига" напрямую в файле или на ходу в настройках **Clover'a**. Файл написан на языке **XML**, что существенно упрощает работу с ним, так как этот язык является user-friendly. Файл должен находится в **EFI/CLOVER**. Его можно редактировать как с помощью простых редакторов (`Notepad++`, `Sublime Text`, `Atom`, `nano`, `vim`), так и с более специализированными под это дело (**PlistEdit**, встроенный редактор в **Xcode**). Также с недавнего времени появился веб-редактор, заточенный под "конфиг" – [**CloverCloudEditor**](http://cloudclovereditor.altervista.org/cce/index.php).

## Создание загрузочной USB-флешки
Самым лучшим и правильным способом по мнению русского хак-коммьюнити является установка чистого образа из App Store. С помощью программы **BootDiskUtility** (в сокращении - BDU) и образа `.hfs` можно получить наиболее чистую систему. 
Естественно, существует не один способ установки Хакинтоша, но сейчас мы рассмотрим наиболее популярный. 
1. Скачиваем **BootDiskUtility** [отсюда](http://cvad-mac.narod.ru/index/bootdiskutility_exe/0-5).
2. Распаковываем утилиту в любую папку. 
3. Скачиваем образ **macOS** [отсюда](https://mac-ru.net/viewtopic.php?t=41), [отсюда](https://nnmclub.to/forum/viewtopic.php?t=1069291) или с [магнет-ссылки](magnet:?dn=BDUOSXDISTR&xt=urn:btih:64125b9f1387632e1b35b8da27eba422f9821d43). 
4. Распаковываем образ из архива.
5. Открываем **BootDiskUtility**, заходим в секцию настроек, нажимаем **Check Now**. Это проверит последнюю версию **Clover** и выберет её в качестве версии для записи на USB. 
6. Выбираем своё USB-устройство, нажимаем **Format Disk**. Дожидаемся записи бутлоадера на USB. 
> На этом шаге у вас уже должен быть скачан образ **macOS** в виде `5.hfs`.  
7. Нажимаем на значок `+` рядом с названием USB. Если вы ничего не меняли в настройках, то у вас появится два раздела, один из которых будет иметь название `CLOVER`, а другой `NONAME`.
8. Выбираем `Part2`, который имеет название `NONAME`. Нажимаем кнопку **Restore Partition** и указываем прежде скачанный `5.hfs`. Начнется запись образа на USB. 

Теперь у вас есть готовая USB с образом **macOS**. Вы совершили свой первый шаг к установке Хакинтоша.

## Установка образа на HDD/SSD
1. Для начала рекомендуется внести минимальные правки в config.plist, прописав в `Boot/Arguments` `-v debug=0x100 keepsyms=1`, а если ставите High Sierra, то и добавить [патч на показ паники](https://4pda.ru/forum/index.php?act=findpost&pid=62112835&anchor=Spoil-62112835-1).
2. Положите kext-ы на сеть, звук и видео. 
> В случае High Sierra и новее не забудьте скопировать `ApfsDriverLoader-64.efi` из папки drivers-Off в drivers64 или drivers64UEFI в зависимости от типа загрузки.
3. Загружаемся с готовой USB в Clover и выбираем пункт **Boot macOS from OS X Base System**. 
> При первом запуске (если он успешен), вас встретит дружелюбное окно с выбором языка.
4. Выбираем нужный язык, нажимаем **Далее**
> Для macOS до версии Sierra (10.12) включительно диск нужно форматировать в файловую систему HFS+ (OS X Extended (журналируемая)), 
  High Sierra - HFS+ для жёсткого диска и APFS для SSD,
  Mojave - APFS для любого типа носителя.
  
> При использовании APFS убедитесь в наличии драйвера [`ApfsDriverLoader.efi`](https://github.com/acidanthera/AppleSupportPkg/releases) в папке drivers64UEFI/drivers64 в зависимости от типа загрузки.

> Если вы уже отформатировали диск, то переходим к шагу 8.
5. Дальше нам нужно отформатировать диск. Наводим на верхнюю панель, в ней нажимаем **Утилиты - Дисковая утилита**. 
6. Выбираем нужный нам раздел, нажимаем **Стереть**. Вводим название, файловую систему и таблицу **GUID**.
7. Дожидаемся окончания форматирования и закрываем утилиту.
8. Нажимаем далее и выбираем свежеотформатированный диск.
9. После завершения установки вам надо будет перезагрузить систему, но на этот раз в Clover надо выбирать **Boot macOS from %названиедиска%**
10. Как только произойдет загрузка системы, вам предложат настроить основные компоненты.
После окончания настройки у вас будет чистая система **macOS**, но, к сожалению, загрузка возможно только с USB. Чтобы это исправить нужно установить **Clover** в _EFI_ раздел, процесс установки которого я опишу ниже.

## Установка Clover на EFI раздел
* В обоих случаях нужно скачать .pkg-установщик [по ссылке](https://sourceforge.net/projects/cloverefiboot/files/latest/download). Всё это будет делаться из уже запущенной macOS.
* Выбираете системный диск через кнопку `Изменить размещение установки` и переходите в раздел `Настроить`, где и конфигурируете установку загрузчика.
* Ставите галочку `Установить Clover на EFI раздел (ESP)`
* Контрольную панель Clover устанавливайте по желанию.
### UEFI
* В разделе `Загрузчик` выбираете `Не обновлять сектора MBR и PBR`.
* В разделе `Drivers64UEFI` дополнительно выбираете `AptioMemoryFix-64` и `ApfsDriverLoader-64`.
### Legacy
* В разделе `Загрузчик` выбираете `Установить boot0af на MBR` (типовая настройка, в экзотических случаях изучайте форумы).
* В разделе `Drivers64` дополнительно выбираете `ApfsDriverLoader-64` (если вдруг устанавливаете High Sierra на SSD).
* `Установить системные RC-скрипты на основной раздел`
> Про назначение других драйверов можно почитать в "Клевере цвета хаки".

После установки можно и нужно скопировать `config.plist`, папки `kexts` и `ACPI\patched` (если использовался) с загрузочной флешки в соответствующие места на появившемся разделе EFI системного диска.

## Видео
В данный момент большая часть поддерживаемых системой видеокарт заводятся через плагин [WhateverGreen.kext](https://github.com/acidanthera/WhateverGreen/releases) к [Lilu.kext](https://github.com/acidanthera/Lilu/releases). Инструкции по его использованию к конкретным видеокартам – ниже по этому тексту. 
## Звук
**На данный момент существует два основных метода "завода" звука: AppleALC и VoodooHDA.**
### AppleALC:  
> Этот метод является динамическим патчингом нативного AppleHDA.
* Само расширение сделано для Realtek ALC кодеков, которые сейчас являются самыми популярными среди производителей материнских плат. 
* Также работает для "завода" звука через HDMI на картах Intel, AMD и NVIDIA.
* Список поддерживаемых кодеков доступен [здесь](https://github.com/acidanthera/AppleALC/wiki/Supported-codecs).

**Установка:**
* Скачиваем [Lilu](https://github.com/acidanthera/Lilu/releases) и сам [AppleALC](https://github.com/acidanthera/AppleALC/releases);
* Кладём оба кекста в **CLOVER/EFI/kexts/Other**.
* Выключаем `FixHDA`, `AddHDMI`, `UseIntelHDMI` в `config.plist`;
* В `config.plist` в **строке** `Devices/Audio/Inject` пишем NO;
* В `Boot/Arguments` добавляем `alcid=X`, где X - номер layout-а, который идёт вместе с кодеком в таблице;
* Перезагружаемся.
> Примечание: если звук так и не появился, то пробуем другой layout. 

### VoodooHDA: 
* Сможет "завести" почти любой аудиокодек, но настройка самого расширения иногда очень проблематична. 
**Установка:**
* Скачиваем сам [кекст](https://sourceforge.net/projects/voodoohda/files/latest/download).
* Кладём кекст в `/EFI/CLOVER/kexts/Other`.
* Перезагружаемся.
* Про дополнительную настройку VoodooHDA можно почитать [здесь](https://applelife.ru/posts/589135).

## Wi-Fi
### Atheros AR****
* Скачиваем [Injector](https://github.com/black-dragon74/ATH9KFixup/releases) и ставим в папку с кекстам и в Clover (если сеть отвалится после перезагрузке переместить его в System/Library/Extensions)
* Скачиваем [ATH9KFixup](https://github.com/black-dragon74/ATH9KFixup/releases/download/1.2.0/ATH9KInjector.zip) и перемещаем в папку с кекстами в Clover.
(Опционально) * Для AR9485 и AR9565 нужно будет дополнительно прописать аргумент -ath9485 и -ath9565, соответственно.
* Перезагружаемся.
> Поддерживаемые модели: AR946X (AR9462 & AR9463), AR9485 и  AR9565.
### Broadcom
> Смотреть [таблицу](http://goo.gl/doHbns).
### Intel 
* Ни один адаптер от Intel не заводим на данный момент. Но ведется разработка [кекста](https://github.com/ammulder/AppleIntelWiFiMVM) под все это дело.
### Qualcomm Atheros QCA****
* Ни один адаптер серии QCA не заводим на данный момент. 

## LAN
### Realtek
* Ставим [кекст](https://github.com/RehabMan/OS-X-Realtek-Network)
* Перезагружаемся.
> Поддерживает все RTL81**.
### Intel 
* Ставим [кекст](https://github.com/Mieze/IntelMausiEthernet)
* Перезагружаемся.
> Поддерживает большинство LAN от Intel (включая новые I217*, I218* и I219*)
### Atheros
* Удаляем ALXEthernet.kext в S/L/E.
* Удаляем соответсвующий сетевой интерфейс в настройках.
* Ставим [кекст](https://github.com/Mieze/AtherosE2200Ethernet/)
* Перезагружаемся.
> Поддерживает AR816x, AR817x, Killer E220x, Killer E2400 и Killer E2500.
### Broadcom
* Используем FakePCIID.
