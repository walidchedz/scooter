if (section === 0) {
    sectionHtml = `<b>خصائص البرمجة:</b><br>
        السرعة القصوى: ${s.specs.max_speed}<br>
        المدى: ${s.specs.range}<br>
        البطارية: ${s.specs.battery}<br>
        الوزن: ${s.specs.weight}<br>
        <button onclick="connectBluetooth()">اتصل بالبلوتوث</button><br>
        <button onclick="connectWiFi()">اتصل بالواي فاي</button>`;
}
