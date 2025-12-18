function showSection(idx, section) {
    document.querySelectorAll('.section-tabs button').forEach(
        (btn, i) => btn.classList.toggle('active', i === section)
    );
    // نفس المحتويات التي كانت موجودة في الدالة
    // تحديث قسم المحتوى
}
