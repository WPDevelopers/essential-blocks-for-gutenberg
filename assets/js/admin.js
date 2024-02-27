document.addEventListener('DOMContentLoaded', function () {
    const promotionCloseBtn = document.querySelector(".eb-admin-promotion-close");
    if (promotionCloseBtn) {
        promotionCloseBtn.addEventListener("click", function (event) {
            event.preventDefault();
            let data = new FormData();
            data.append("action", "eb_admin_promotion");
            data.append("admin_nonce", EssentialBlocksLocalize.admin_nonce);

            fetch(EssentialBlocksLocalize.ajax_url, {
                method: "POST",
                body: data,
            }) // wrapped
                .then((res) => res.text())
                .then((data) => {
                    const res = JSON.parse(data);
                    if (res.success) {
                        let promotionWrap = document.getElementById('eb-admin-promotion-message');
                        if (promotionWrap) {
                            promotionWrap.remove();
                        }
                    }
                })
                .catch((err) => console.log(err));
        })
    }
})
