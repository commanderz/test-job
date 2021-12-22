"c:\Program Files\OpenSSL-Win64\bin\openssl" genrsa -out key.pem
"c:\Program Files\OpenSSL-Win64\bin\openssl" req -new -key key.pem -out csr.pem
"c:\Program Files\OpenSSL-Win64\bin\openssl" x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem