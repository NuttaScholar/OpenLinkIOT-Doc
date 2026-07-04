export const policies = {
  en: {
    lang: "en",
    title: "Privacy Policy",
    subtitle: "Privacy policy for the IoT device control app.",
    iconAlt: "IOT_MobileApp icon",
    languageSwitch: { aria: "Language" },
    navAria: "Privacy policy sections",
    navTitle: "Sections",
    nav: [
      { href: "#overview", label: "Overview" },
      { href: "#data", label: "Data We Handle" },
      { href: "#use", label: "How We Use Data" },
      { href: "#sharing", label: "Sharing" },
      { href: "#storage", label: "Storage" },
      { href: "#permissions", label: "Permissions" },
      { href: "#choices", label: "User Choices" },
      { href: "#security", label: "Security" },
      { href: "#children", label: "Children" },
      { href: "#changes", label: "Changes" },
      { href: "#contact", label: "Contact" },
    ],
    sections: {
      overview: {
        title: "Overview",
        updatedLabel: "Last updated:",
        updated: "July 4, 2026",
        body:
          "This Privacy Policy explains how IOT_MobileApp handles data. The app is used to discover, configure, group, and control OpenLinkIoT-compatible IoT devices over a local network and through NETPIE. The app does not include an in-app user account system and does not create user accounts on a developer-operated server.",
        summaryAria: "Privacy summary",
        summary: [
          {
            title: "Local-first storage",
            text: "Device groups, device records, and configuration are primarily stored in SQLite on the user's device.",
          },
          {
            title: "Network-based control",
            text: "The app sends commands to IoT devices over LAN or through NETPIE when cloud control is used.",
          },
          {
            title: "No ads or analytics found",
            text: "The current app code does not include advertising SDKs or analytics tracking.",
          },
        ],
        notice:
          "This policy is based on the current app implementation. If the app later adds accounts, analytics, crash reporting, ads, a developer backend, or additional third-party services, this policy should be updated before publishing that version.",
      },
      data: {
        title: "Data We Handle",
        headers: ["Data type", "Examples", "Source", "Storage or handling"],
        mobileLabels: ["Data type", "Examples", "Source", "Storage"],
        rows: [
          ["Device group data", "Group name, color or style index", "User-created in the app", "Stored in local SQLite"],
          [
            "IoT device data",
            "Device name, MAC address, device type, setup status, IP address, port",
            "UDP discovery and device profile responses",
            "Configured devices are stored in local SQLite",
          ],
          [
            "Device control data",
            "Power state, component ID, component name, options, notify message, shadow state",
            "IoT device responses or NETPIE shadow data",
            "Component metadata is stored locally; live state is used for display and refresh",
          ],
          [
            "Device authentication and NETPIE credentials",
            "Hashed device password, NETPIE Client ID, NETPIE token or password",
            "User input and device profile data",
            "Stored in local SQLite so the app can control configured devices later",
          ],
          [
            "WiFi setup data",
            "SSID, WiFi password, security flag, signal strength",
            "Device WiFi scan results and user input",
            "The WiFi password is sent to the device during setup and is not saved to SQLite by the current setup flow",
          ],
        ],
      },
      use: {
        title: "How We Use Data",
        items: [
          "Discover IoT devices on the same network using UDP discovery.",
          "Create, edit, and display device groups.",
          "Configure devices, including device password setup and WiFi setup.",
          "Read device profiles and component metadata to build the control UI.",
          "Send control commands such as power, switch, button group, delay timer, and text field updates.",
          "Check device online or offline status through NETPIE or local LAN discovery.",
        ],
      },
      sharing: {
        title: "Sharing and Third Parties",
        blocks: [
          {
            title: "Local IoT devices",
            body:
              "The app sends UDP discovery packets and TCP commands to devices on the local network. Data sent to devices may include a device password header, setup commands, WiFi SSID, WiFi password, and component control payloads.",
          },
          {
            title: "NETPIE",
            body:
              "When a device is configured for NETPIE, the app calls NETPIE APIs to check device status, read shadow data, and publish MQTT command messages. These requests use the NETPIE Client ID and token/password saved for that device. Data sent to NETPIE is also subject to NETPIE's own service terms and privacy practices.",
          },
        ],
        badgeAria: "External communication types",
        badges: ["UDP discovery", "TCP direct control", "NETPIE REST API", "NETPIE shadow data"],
      },
      storage: {
        title: "Storage and Retention",
        paragraphs: [
          "Device groups, configured devices, hashed device passwords, MQTT/NETPIE settings, and component metadata are stored in a local SQLite database named <strong>app.db</strong> on the user's mobile device. This data remains on the device until the user deletes it in the app, clears app data, or uninstalls the app.",
          "The current app code does not include a developer-operated cloud backup or sync system. The user's operating system or device backup service may back up app data depending on the user's device settings.",
        ],
      },
      permissions: {
        title: "Permissions and Network Use",
        items: [
          { label: "Internet / Network:", text: "used for NETPIE APIs, TCP direct control, and UDP discovery." },
          { label: "Local network:", text: "used to discover and communicate with IoT devices on the same WiFi or LAN." },
          { label: "WiFi/network information:", text: "the app uses the device IP address to calculate a broadcast address for discovery." },
        ],
        note:
          "The current code does not use GPS location. WiFi networks shown during setup come from the IoT device's scan result, not from a GPS-based location feature in the app.",
      },
      choices: {
        title: "User Choices",
        items: [
          "You can choose not to add devices or not to provide WiFi/NETPIE information, but setup and control features may not work.",
          "You can delete device groups or remove configured devices in the app where supported.",
          "You can clear app data in the operating system settings or uninstall the app to remove local database data.",
          "If a NETPIE token/password or device password changes, you may need to set up the device again.",
        ],
      },
      security: {
        title: "Security",
        paragraphs: [
          "The app hashes the device password before saving it and uses that password to authenticate with devices. Some sensitive configuration, such as NETPIE token/password and device records, is stored locally so the app can control configured devices. Users should protect their mobile device with a lock screen and avoid installing the app from untrusted sources.",
          "During WiFi setup, SSID and WiFi password are sent to the IoT device over the local network. Users should perform setup only on trusted networks.",
        ],
      },
      children: {
        title: "Children",
        paragraphs: [
          "The app is not designed to collect personal information from children. It does not include user accounts or social features in the current implementation. Parents or guardians should supervise IoT device and home network setup as appropriate.",
        ],
      },
      changes: {
        title: "Changes to This Policy",
        paragraphs: [
          "If the app changes how it handles data, such as adding user accounts, a developer backend, analytics, crash reporting, ads, or other third-party services, this Privacy Policy should be updated before publishing the new version.",
        ],
      },
      contact: {
        title: "Contact",
        beforeLink:
          "For questions about this Privacy Policy, contact the developer using the developer contact email listed on the app's Google Play Store listing. If the project repository is publicly available, you may also contact the maintainer through the repository:",
      },
    },
  },
  th: {
    lang: "th",
    title: "นโยบายความเป็นส่วนตัว",
    subtitle: "นโยบายความเป็นส่วนตัวสำหรับแอปควบคุมอุปกรณ์ IoT",
    iconAlt: "ไอคอน IOT_MobileApp",
    languageSwitch: { aria: "ภาษา" },
    navAria: "หัวข้อนโยบายความเป็นส่วนตัว",
    navTitle: "หัวข้อ",
    nav: [
      { href: "#overview", label: "ภาพรวม" },
      { href: "#data", label: "ข้อมูลที่แอปใช้" },
      { href: "#use", label: "วิธีใช้ข้อมูล" },
      { href: "#sharing", label: "การส่งต่อข้อมูล" },
      { href: "#storage", label: "การจัดเก็บ" },
      { href: "#permissions", label: "สิทธิ์" },
      { href: "#choices", label: "ทางเลือกของผู้ใช้" },
      { href: "#security", label: "ความปลอดภัย" },
      { href: "#children", label: "เด็กและเยาวชน" },
      { href: "#changes", label: "การเปลี่ยนแปลง" },
      { href: "#contact", label: "ติดต่อ" },
    ],
    sections: {
      overview: {
        title: "ภาพรวม",
        updatedLabel: "วันที่อัปเดตล่าสุด:",
        updated: "4 กรกฎาคม 2026",
        body:
          "นโยบายนี้อธิบายว่า IOT_MobileApp จัดการข้อมูลอย่างไร แอปนี้ใช้สำหรับค้นหา ตั้งค่า จัดกลุ่ม และควบคุมอุปกรณ์ IoT ที่รองรับ OpenLinkIoT ผ่านเครือข่ายภายในและผ่าน NETPIE แอปไม่มีระบบบัญชีผู้ใช้ในตัว และไม่ได้สร้างบัญชีผู้ใช้บนเซิร์ฟเวอร์ของผู้พัฒนาแอป",
        summaryAria: "สรุปความเป็นส่วนตัว",
        summary: [
          {
            title: "เก็บข้อมูลในเครื่องเป็นหลัก",
            text: "Device group, รายการอุปกรณ์ และการตั้งค่าจะถูกเก็บใน SQLite บนอุปกรณ์ของผู้ใช้เป็นหลัก",
          },
          {
            title: "ควบคุมผ่านเครือข่าย",
            text: "แอปส่งคำสั่งไปยังอุปกรณ์ IoT ผ่าน LAN หรือผ่าน NETPIE เมื่อใช้การควบคุมผ่านระบบคลาวด์",
          },
          {
            title: "ไม่พบโฆษณาหรือ analytics",
            text: "โค้ดแอปปัจจุบันไม่มี advertising SDK หรือ analytics tracking",
          },
        ],
        notice:
          "นโยบายนี้อ้างอิงจากการทำงานของแอปในปัจจุบัน หากแอปเพิ่มบัญชีผู้ใช้ analytics, crash reporting, โฆษณา, backend ของผู้พัฒนา หรือบริการภายนอกเพิ่มเติม ควรอัปเดตนโยบายนี้ก่อนเผยแพร่เวอร์ชันนั้น",
      },
      data: {
        title: "ข้อมูลที่แอปใช้",
        headers: ["ประเภทข้อมูล", "ตัวอย่าง", "แหล่งที่มา", "การจัดเก็บหรือการจัดการ"],
        mobileLabels: ["ประเภทข้อมูล", "ตัวอย่าง", "แหล่งที่มา", "การจัดเก็บ"],
        rows: [
          ["ข้อมูล Device Group", "ชื่อกลุ่ม, รูปแบบสีหรือ style index", "ผู้ใช้สร้างหรือแก้ไขในแอป", "เก็บใน SQLite บนอุปกรณ์"],
          [
            "ข้อมูลอุปกรณ์ IoT",
            "ชื่ออุปกรณ์, MAC address, ประเภทอุปกรณ์, สถานะ setup, IP address, port",
            "UDP discovery และข้อมูล device profile จากอุปกรณ์",
            "อุปกรณ์ที่ตั้งค่าแล้วจะถูกเก็บใน SQLite บนอุปกรณ์",
          ],
          [
            "ข้อมูลการควบคุมอุปกรณ์",
            "สถานะ power, component ID, ชื่อ component, options, notify message, shadow state",
            "ข้อมูลตอบกลับจากอุปกรณ์ IoT หรือ NETPIE shadow data",
            "component metadata ถูกเก็บในเครื่อง ส่วน live state ใช้เพื่อแสดงผลและ refresh",
          ],
          [
            "ข้อมูลยืนยันตัวตนและ NETPIE",
            "รหัสผ่านอุปกรณ์แบบ hash, NETPIE Client ID, NETPIE token/password",
            "ข้อมูลจากผู้ใช้และ device profile",
            "เก็บใน SQLite เพื่อให้แอปควบคุมอุปกรณ์ที่ตั้งค่าไว้ได้ในภายหลัง",
          ],
          [
            "ข้อมูล WiFi ระหว่าง setup",
            "SSID, รหัสผ่าน WiFi, security flag, signal strength",
            "ผลสแกน WiFi จากอุปกรณ์และข้อมูลที่ผู้ใช้กรอก",
            "รหัสผ่าน WiFi ถูกส่งให้อุปกรณ์ระหว่าง setup และ flow ปัจจุบันไม่ได้บันทึกลง SQLite",
          ],
        ],
      },
      use: {
        title: "วิธีใช้ข้อมูล",
        items: [
          "ค้นหาอุปกรณ์ IoT ในเครือข่ายเดียวกันด้วย UDP discovery",
          "สร้าง แก้ไข และแสดง Device Group",
          "ตั้งค่าอุปกรณ์ รวมถึงรหัสผ่านอุปกรณ์และ WiFi",
          "อ่าน device profile และ component metadata เพื่อสร้าง UI ควบคุม",
          "ส่งคำสั่งควบคุม เช่น power, switch, button group, delay timer และ text field",
          "ตรวจสอบสถานะ online หรือ offline ผ่าน NETPIE หรือการค้นหาใน LAN",
        ],
      },
      sharing: {
        title: "การส่งต่อข้อมูลและบริการภายนอก",
        blocks: [
          {
            title: "อุปกรณ์ IoT ภายในเครือข่าย",
            body:
              "แอปส่ง UDP discovery packet และคำสั่ง TCP ไปยังอุปกรณ์ในเครือข่ายภายใน ข้อมูลที่ส่งอาจรวม device password header, คำสั่ง setup, WiFi SSID, รหัสผ่าน WiFi และ payload สำหรับควบคุม component",
          },
          {
            title: "NETPIE",
            body:
              "เมื่ออุปกรณ์ถูกตั้งค่าสำหรับ NETPIE แอปจะเรียก API ของ NETPIE เพื่อเช็กสถานะอุปกรณ์ อ่าน shadow data และส่ง MQTT command โดยใช้ NETPIE Client ID และ token/password ที่บันทึกไว้สำหรับอุปกรณ์นั้น ข้อมูลที่ส่งให้ NETPIE อยู่ภายใต้นโยบายและเงื่อนไขของ NETPIE ด้วย",
          },
        ],
        badgeAria: "ประเภทการสื่อสารภายนอก",
        badges: ["UDP discovery", "TCP direct control", "NETPIE REST API", "NETPIE shadow data"],
      },
      storage: {
        title: "การจัดเก็บและระยะเวลาเก็บข้อมูล",
        paragraphs: [
          "ข้อมูลกลุ่ม อุปกรณ์ที่ตั้งค่าแล้ว รหัสผ่านอุปกรณ์แบบ hash ข้อมูล MQTT/NETPIE และ component metadata ถูกเก็บไว้ในฐานข้อมูล SQLite ชื่อ <strong>app.db</strong> บนอุปกรณ์มือถือของผู้ใช้ ข้อมูลจะอยู่ในเครื่องจนกว่าผู้ใช้จะลบข้อมูลในแอป ล้างข้อมูลแอป หรือถอนการติดตั้งแอป",
          "โค้ดปัจจุบันไม่มีระบบ cloud backup หรือ sync ของผู้พัฒนาแอป แต่ระบบปฏิบัติการหรือบริการ backup ของเครื่องผู้ใช้อาจสำรองข้อมูลแอปตามการตั้งค่าของผู้ใช้",
        ],
      },
      permissions: {
        title: "สิทธิ์และการใช้เครือข่าย",
        items: [
          { label: "Internet / Network:", text: "ใช้สำหรับ NETPIE APIs, TCP direct control และ UDP discovery" },
          { label: "Local network:", text: "ใช้เพื่อค้นหาและสื่อสารกับอุปกรณ์ IoT ใน WiFi หรือ LAN เดียวกัน" },
          { label: "ข้อมูล WiFi/network:", text: "แอปใช้ IP address ของเครื่องเพื่อคำนวณ broadcast address สำหรับ discovery" },
        ],
        note:
          "โค้ดปัจจุบันไม่ได้ใช้ตำแหน่ง GPS รายการ WiFi ที่เห็นตอน setup มาจากผลการสแกนของอุปกรณ์ IoT ไม่ใช่ฟีเจอร์ระบุตำแหน่งของแอป",
      },
      choices: {
        title: "ทางเลือกของผู้ใช้",
        items: [
          "ผู้ใช้สามารถเลือกไม่เพิ่มอุปกรณ์หรือไม่กรอกข้อมูล WiFi/NETPIE ได้ แต่ฟังก์ชัน setup/control อาจใช้งานไม่ได้",
          "ผู้ใช้สามารถลบ Device Group หรืออุปกรณ์ที่เพิ่มไว้ได้จากหน้าจอที่รองรับในแอป",
          "ผู้ใช้สามารถล้างข้อมูลแอปจากการตั้งค่าระบบ หรือถอนการติดตั้งแอปเพื่อลบ local database",
          "หาก NETPIE token/password หรือรหัสผ่านอุปกรณ์เปลี่ยน อาจต้อง setup อุปกรณ์ใหม่",
        ],
      },
      security: {
        title: "ความปลอดภัย",
        paragraphs: [
          "แอป hash device password ก่อนบันทึกและใช้รหัสผ่านนั้นสำหรับยืนยันตัวตนกับอุปกรณ์ ข้อมูลบางส่วน เช่น NETPIE token/password และข้อมูลอุปกรณ์ ถูกเก็บไว้ในฐานข้อมูล local เพื่อให้แอปควบคุมอุปกรณ์ได้ ผู้ใช้ควรล็อกหน้าจอเครื่องและหลีกเลี่ยงการติดตั้งแอปจากแหล่งที่ไม่น่าเชื่อถือ",
          "ระหว่าง WiFi setup แอปจะส่ง SSID และรหัสผ่าน WiFi ไปยังอุปกรณ์ IoT ผ่านเครือข่ายภายใน ผู้ใช้ควรทำ setup เฉพาะบนเครือข่ายที่เชื่อถือได้",
        ],
      },
      children: {
        title: "เด็กและเยาวชน",
        paragraphs: [
          "แอปนี้ไม่ได้ออกแบบมาเพื่อรวบรวมข้อมูลส่วนบุคคลจากเด็ก และไม่มีระบบบัญชีผู้ใช้หรือฟีเจอร์ social ในโค้ดปัจจุบัน ผู้ปกครองควรกำกับดูแลการตั้งค่าอุปกรณ์ IoT และเครือข่ายภายในบ้านตามความเหมาะสม",
        ],
      },
      changes: {
        title: "การเปลี่ยนแปลงนโยบาย",
        paragraphs: [
          "หากแอปเปลี่ยนวิธีจัดการข้อมูล เช่น เพิ่มบัญชีผู้ใช้ backend ของผู้พัฒนา analytics, crash reporting, โฆษณา หรือบริการภายนอกอื่น ควรอัปเดต Privacy Policy นี้ก่อนเผยแพร่เวอร์ชันใหม่",
        ],
      },
      contact: {
        title: "ติดต่อ",
        beforeLink:
          "หากมีคำถามเกี่ยวกับ Privacy Policy นี้ โปรดติดต่อผู้พัฒนาผ่านอีเมลติดต่อผู้พัฒนาที่แสดงอยู่บนหน้า Google Play Store ของแอป หาก repository ของโปรเจกต์เปิดเป็นสาธารณะ ผู้ใช้อาจติดต่อผู้ดูแลผ่าน repository ได้ที่:",
      },
    },
  },
};
