
## **Back-end**
*kafka: Nhận dữ liệu gửi từ Kafka
*controllers:lấy dữ liệu được yêu cầu từ các models, 
tạo trang HTML hiển thị dữ liệu và trả về cho người dùng.
*routes: Điều hướng các yêu cầu từ người dùng tới các hàm controller tương ứng
*models:format data(electrical, enviroment, operator)
*sockets/getdata:emit các gói tin tới các biểu đồ tương ứng 

## **Front-end**
*public/js/user/: lắng nghe các gói tin được emit từ getdata và vẽ lên biểu đồ (armchart, gauge)
*public/js/admin: generate data để hiển thị lên các biểu đồ trong trang admin (chart.js)
*views: render data (admin2.ejs và main2.ejs là trang html mới).

