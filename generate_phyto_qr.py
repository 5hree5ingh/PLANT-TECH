import qrcode

# Create QR code for Phytoingredients download page (without www)
url = "https://phytoingredients.com/download"

# Create QR code with high error correction
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Create an image
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("phytoingredients_qr_code.png")
print(f"QR Code generated successfully!")
print(f"URL encoded: {url}")
print(f"Saved as: phytoingredients_qr_code.png")
