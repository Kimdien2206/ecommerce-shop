# Trang web bán quần áo với hệ thống đề xuất dựa trên lịch sử mua hàng

![Logo trang web](path/to/logo.png)

## Giới thiệu

Đây là đồ án 1 trên GitHub của trang web bán quần áo, nơi triển khai một hệ thống đề xuất dựa trên lịch sử mua hàng của khách hàng. Thư viện Content Based Recommender được sử dụng để tạo ra các gợi ý sản phẩm phù hợp với sở thích và hành vi mua hàng của từng khách hàng.

Trang web bán quần áo cung cấp một giao diện dễ sử dụng cho khách hàng tìm kiếm và mua sắm các sản phẩm thời trang. Hệ thống đề xuất giúp cá nhân hóa trải nghiệm mua hàng, đồng thời cung cấp những gợi ý sản phẩm mới và tương tự dựa trên lịch sử mua hàng của khách hàng.

## Tính năng
#### Hệ thống gợi ý sản phẩm:  
- Hệ thống gợi ý những sản phẩm tương tự dựa trên những sản phẩm người dùng đã xem và đã mua.
- Hệ thống gợi ý sản phẩm theo từng cá nhân.
- Cung cấp thông tin cơ bản về sản phẩm
#### Xây dựng website: 
- Ứng dụng chạy trên nền tảng Web
- Giới thiệu về sản phẩm, cửa hàng, quy trình mua hàng, thông tin liên hệ một cách trực quan, đem đến cho người dùng những nội dung chi tiết nhất 
- Cung cấp giao diện quản lý tài khoản, đăng và chỉnh sửa tin tức, quản lý hỏi đáp.
- Cung cấp các thống kê, biểu đồ trực quan số liệu, hỗ trợ công tác quản trị doanh nghiệp

## Phạm vi
#### Phạm vi môi trường: Web
#### Phạm vi chức năng:  
Đối với hệ thống gợi ý sản phẩm:  
- Gợi ý những sản phẩm tương tự sản phẩm người dùng đã xem hoặc đã mua, tăng mức độ tiếp cận khách hàng của sản phẩm.
Đối với ứng dụng:  
- Hệ thống cung cấp giao diện mua dành cho khách hàng tiện lợi, dễ sử dụng.
- Tích hợp hệ thống gợi ý sản phẩm nhằm quảng bá sản phẩm đến người dùng, tăng doanh thu.
- Hệ thống cung cấp giao diện quản lý giúp chủ cửa hàng theo dõi doanh số, quản lý hàng tồn kho.
- Hệ thống cung cấp giao diện đăng ký, đăng nhập giúp xác thực người dùng.
- Hệ thống cung cấp tính năng giỏ hàng hỗ trợ người mua đơn giản hóa quá trình mua hàng.
#### Đối tượng sử dụng:  
- Khách hàng có nhu cầu mua sắm quần áo online, tìm kiếm những sản phẩm thời trang.
- Quản trị viên muốn thực hiện các công việc quản trị doanh nghiệp.

## Công nghệ sử dụng
- Ngôn ngữ: typescript
- Front-end: ReactJS
- Back-end: NodeJS, NestJS
- Database: PostgreSQL 
- Supabase

## Hệ thống gợi ý sản phẩm

Để đơn giản cho việc phát triển hệ thống, nhóm quyết định sử dụng thư viện [Content Based Recommender](https://github.com/stanleyfok/content-based-recommender) giúp hỗ trợ trong việc sử dụng triển khai hệ thống. Nhóm chỉ cần chuẩn bị dữ liệu để thư viện thực hiện việc train.

Nhóm sẽ thực hiện gợi ý sản phẩm dựa trên ***các lịch sử mua hàng gần nhất của khách hàng***

#### Lý do chọn thư viện
- Có 2 thuật toán phổ biến được sử dụng là collaborative filtering and content-based trong việc xây dựng hệ thống đề xuất. 
- **Collaborative filtering** sẽ phù hợp hơn khi có lượng dữ liệu lớn cùng với dữ liệu tương tác giữa người dùng và sản phẩm hoặc các đánh giá. Nó phụ thuộc vào hành vi và sở thích của những người dùng giống nhau để đề xuất và nó không cần thông tin chi tiết sản phẩm.
- **Content-based** sẽ phù hợp hơn trong trường hợp hơn khi có lượng dữ liệu ít về các sản phẩm sẽ được đề xuất. Nó phụ thuộc vào đặc trưng và tính chất để đề xuất và nó không cần có sự tương tác giữa người dùng với sản phẩm.
- Nhóm quyết định chọn thư viện sử dụng thuật toán **Content-based** vì đặc điểm trang web sẽ có lượng dữ liệu ít cũng như sẽ ít có tương tác giữa người dùng với sản phẩm.

#### Một số thông tin về thư viện
Đây là một content-based recommender đơn giản được viết bằng javascript để minh họa khái niệm đề xuất dựa trên nội dung, đặc biệt hữu ích cho các website về thương mại điện tử, tin tức,...

#### Thư viện sẽ thực hiện training bao gồm 3 bước chính:

1. Content Preprocessing:
- Loại bỏ thẻ HTML: loại bỏ tất cả các thẻ HTML có trong dữ liệu. Vì các thẻ HTML thường được sử dụng để định dạng và cấu trúc trang web nên chúng không phù hợp để tìm hay tính toán sự giống nhau của các tài liệu.
- Loại bỏ những từ không quan trọng như là các từ nối điều này sẽ giúp thuật toán tập trung vào những từ quan trọng.
2. Document Vectors Formation using TF-IDF:
- TF-IDF (Term Frequency-Inverse Document Frequency): là một thuật toán tiện dụng sử dụng tần suất xuất hiện của các từ để xác định mức độ liên quan của các từ đó đối với một tài liệu nhất định. 
- Nó tính đến cả tần suất của thuật ngữ trong tài liệu hiện tại (TF) và độ hiếm của nó trên tất cả các tài liệu (IDF). TF-IDF gán trọng số cao hơn cho các thuật ngữ xuất hiện thường xuyên hơn trong tài liệu hiện tại nhưng ít phổ biến hơn trong các tài liệu khác, do đó nắm bắt được tầm quan trọng tương đối của chúng.
3. Cosine Similarity Calculation:
- Cosine Similarity: là một số liệu được sử dụng để đo lường sự giống nhau giữa hai tài liệu được biểu diễn dưới dạng vectơ. Nó tính toán cosin của góc giữa các vectơ, biểu thị sự giống nhau của chúng. Điểm tương tự cosine cao hơn cho thấy sự tương đồng lớn hơn giữa các tài liệu.
- Similarity Scores: được tính bởi tất cả các cặp vectơ tài liệu. Những điểm số này thể hiện sự giống nhau giữa từng cặp tài liệu và giúp xác định các tài liệu giống nhau nhất. Điểm tương đồng cao hơn biểu thị mức độ tương đồng mạnh hơn, trong khi điểm thấp hơn biểu thị sự khác biệt.

Các bước này giúp xử lý trước nội dung, biểu thị các tài liệu dưới dạng vectơ số và tính toán độ tương tự của chúng, cho phép hệ thống Đề xuất dựa trên nội dung cung cấp các đề xuất có liên quan dựa trên lịch sử mua hàng của người dùng.

## Thực tế triển khai

#### 1. Lựa chọn dữ liệu
Do đây là thuật toán dựa trên đặc trưng của sản phẩm nên bộ dữ liệu có cấu trúc như sau:
```typescript
    productData = { 
        id: productID, 
        content: { name, description, tags, collection }
    }
```
#### 2. Các bước chạy để lấy sản phẩm được đề xuất
<div align="center">

![recommendation-system-flow-chart](https://drive.google.com/uc?export=view&id=1NC_jq4R3XAqyPDHP5VeBKLQ9XS0w27JA)

</div>



## Cài đặt và sử dụng

Dự án đang trong quá trình phát triển.