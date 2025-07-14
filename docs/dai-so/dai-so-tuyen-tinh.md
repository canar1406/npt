---
sidebar_position: 1
---

# Đại Số Tuyến Tính

Đại số tuyến tính là nền tảng của nhiều lĩnh vực toán học và ứng dụng thực tế.

## Vector và Không gian Vector

### Định nghĩa Vector
Vector là một đại lượng có hướng, được biểu diễn bằng một dãy các số:
```
v = (v₁, v₂, ..., vₙ)
```

### Các phép toán với Vector

#### Phép cộng vector:
```
u + v = (u₁ + v₁, u₂ + v₂, ..., uₙ + vₙ)
```

#### Phép nhân vô hướng:
```
ku = (ku₁, ku₂, ..., kuₙ)
```

#### Tích vô hướng:
```
u · v = u₁v₁ + u₂v₂ + ... + uₙvₙ
```

## Ma trận

### Định nghĩa
Ma trận là một bảng chữ nhật các số, ký hiệu:
```
A = [a₁₁  a₁₂  ...  a₁ₙ]
    [a₂₁  a₂₂  ...  a₂ₙ]
    [⋮    ⋮    ⋱   ⋮  ]
    [aₘ₁  aₘ₂  ...  aₘₙ]
```

### Phép toán ma trận

#### Phép cộng ma trận:
```
(A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ
```

#### Phép nhân ma trận:
```
(AB)ᵢⱼ = Σₖ AᵢₖBₖⱼ
```

## Hệ phương trình tuyến tính

### Dạng tổng quát
```
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
⋮
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ
```

### Dạng ma trận
```
Ax = b
```

### Phương pháp giải

#### 1. Phương pháp Gauss
- Biến đổi ma trận thành dạng bậc thang
- Giải ngược từ dưới lên

#### 2. Phương pháp Cramer
- Áp dụng khi ma trận hệ số vuông và khả nghịch
- Sử dụng định thức

## Định thức

### Định nghĩa cho ma trận 2×2
```
det(A) = |a₁₁  a₁₂| = a₁₁a₂₂ - a₁₂a₂₁
         |a₂₁  a₂₂|
```

### Tính chất
- det(AB) = det(A)det(B)
- det(Aᵀ) = det(A)
- Nếu det(A) ≠ 0 thì A khả nghịch

## Giá trị riêng và Vector riêng

### Định nghĩa
Với ma trận A, nếu tồn tại số λ và vector v ≠ 0 sao cho:
```
Av = λv
```
thì λ gọi là giá trị riêng và v là vector riêng tương ứng.

### Phương trình đặc trưng
```
det(A - λI) = 0
```

## Ứng dụng thực tế

### 1. Máy học
- Principal Component Analysis (PCA)
- Regression tuyến tính
- Neural networks

### 2. Đồ họa máy tính
- Phép biến đổi hình học
- Projection 3D
- Animation

### 3. Xử lý tín hiệu
- Fourier Transform
- Wavelet Transform
- Compression

## Bài tập thực hành

### Bài 1: Giải hệ phương trình
```
2x + 3y - z = 1
x - y + 2z = 3
3x + y + z = 2
```

### Bài 2: Tìm giá trị riêng
```
A = [3  1]
    [0  2]
```

### Bài 3: Tính ma trận nghịch đảo
```
B = [1  2]
    [3  4]
```
