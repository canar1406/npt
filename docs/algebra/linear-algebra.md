# Đại số tuyến tính

Đại số tuyến tính là nền tảng của nhiều lĩnh vực toán học và ứng dụng khoa học.

## Ma trận

Ma trận là một mảng số hữu hạn được sắp xếp theo hàng và cột.

### Định nghĩa
Ma trận A kích thước m×n:
```
A = [a₁₁  a₁₂  ...  a₁ₙ]
    [a₂₁  a₂₂  ...  a₂ₙ]
    [...  ...  ...  ...]
    [aₘ₁  aₘ₂  ...  aₘₙ]
```

### Phép toán ma trận

#### Cộng ma trận
```
A + B = [aᵢⱼ + bᵢⱼ]
```

#### Nhân ma trận
```
(AB)ᵢⱼ = Σₖ aᵢₖbₖⱼ
```

## Định thức

Định thức là một giá trị vô hướng được tính từ ma trận vuông.

### Ma trận 2×2
```
det(A) = |a  b| = ad - bc
         |c  d|
```

### Ma trận 3×3
```
det(A) = a₁₁(a₂₂a₃₃ - a₂₃a₃₂) - a₁₂(a₂₁a₃₃ - a₂₃a₃₁) + a₁₃(a₂₁a₃₂ - a₂₂a₃₁)
```

## Không gian vector

Không gian vector là tập hợp các vector với phép cộng và phép nhân vô hướng.

### Định nghĩa
Không gian vector V trên trường F thỏa mãn:
1. Tính đóng kín với phép cộng
2. Tính kết hợp
3. Phần tử trung tính
4. Phần tử đối
5. Tính phân phối
6. Tính kết hợp với phép nhân vô hướng
7. Phần tử đơn vị

### Cơ sở và chiều
- **Cơ sở**: Tập hợp các vector độc lập tuyến tính sinh ra không gian
- **Chiều**: Số lượng vector trong cơ sở

## Biến đổi tuyến tính

Biến đổi tuyến tính là ánh xạ bảo toàn cấu trúc tuyến tính.

### Định nghĩa
T: V → W là biến đổi tuyến tính nếu:
- T(u + v) = T(u) + T(v)
- T(cu) = cT(u)

### Ma trận biểu diễn
Mỗi biến đổi tuyến tính có thể biểu diễn bằng ma trận.

## Trị riêng và vector riêng

### Định nghĩa
Nếu Av = λv với v ≠ 0, thì:
- λ là trị riêng
- v là vector riêng tương ứng

### Phương trình đặc trưng
```
det(A - λI) = 0
```

### Chéo hóa ma trận
Ma trận A chéo hóa được nếu tồn tại ma trận P sao cho:
```
P⁻¹AP = D
```
trong đó D là ma trận chéo.

## Ứng dụng

### 1. Máy học
- Phân tích thành phần chính (PCA)
- Hồi quy tuyến tính
- Mạng neural

### 2. Đồ họa máy tính
- Biến đổi hình học
- Xử lý hình ảnh
- Rendering 3D

### 3. Vật lý
- Cơ học lượng tử
- Dao động
- Trường điện từ

## Bài tập

### Bài 1: Tính tích ma trận
```
A = [1  2]    B = [5  6]
    [3  4]        [7  8]

Tính AB
```

### Bài 2: Tìm trị riêng
```
A = [3  1]
    [0  2]

Tìm trị riêng và vector riêng
```

## Tài liệu tham khảo

- Gilbert Strang - "Introduction to Linear Algebra"
- David C. Lay - "Linear Algebra and Its Applications"
- MIT OpenCourseWare - Linear Algebra

*Đại số tuyến tính là công cụ mạnh mẽ trong toán học hiện đại!*
