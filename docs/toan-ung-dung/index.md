---
sidebar_position: 1
---

# Toán Ứng Dụng

Toán ứng dụng là việc sử dụng các phương pháp toán học để giải quyết các bài toán thực tế trong khoa học, kỹ thuật và đời sống.

## Các lĩnh vực chính

### 1. Thống kê và Xác suất
- **Xác suất cơ bản**
- **Biến ngẫu nhiên và phân phối**
- **Thống kê suy luận**
- **Hồi quy và tương quan**

### 2. Toán rời rạc
- **Lý thuyết đồ thị**
- **Combinatorics**
- **Thuật toán và độ phức tạp**
- **Mật mã học**

### 3. Phương pháp số
- **Giải phương trình số**
- **Nội suy và xấp xỉ**
- **Tích phân số**
- **Giải hệ phương trình tuyến tính**

### 4. Tối ưu hóa
- **Quy hoạch tuyến tính**
- **Quy hoạch phi tuyến**
- **Quy hoạch động**
- **Lý thuyết trò chơi**

## Thống kê và Xác suất

### Xác suất cơ bản

#### Định nghĩa
Xác suất của biến cố A:
```
P(A) = |A|/|Ω|
```
với Ω là không gian mẫu.

#### Các quy tắc
- **Quy tắc cộng**: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
- **Quy tắc nhân**: P(A ∩ B) = P(A)P(B|A)
- **Công thức Bayes**: P(A|B) = P(B|A)P(A)/P(B)

### Phân phối xác suất

#### Phân phối nhị thức
```
P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
```

#### Phân phối Poisson
```
P(X = k) = (λ^k × e^(-λ))/k!
```

#### Phân phối chuẩn
```
f(x) = (1/√(2πσ²)) × e^(-(x-μ)²/(2σ²))
```

### Thống kê suy luận

#### Khoảng tin cậy cho trung bình
```
x̄ ± z_(α/2) × σ/√n
```

#### Kiểm định giả thuyết
1. Thiết lập H₀ và H₁
2. Chọn mức ý nghĩa α
3. Tính thống kê kiểm định
4. Đưa ra kết luận

## Toán rời rạc

### Lý thuyết đồ thị

#### Định nghĩa
Đồ thị G = (V, E) với V là tập đỉnh, E là tập cạnh.

#### Các loại đồ thị
- **Đồ thị vô hướng**: Cạnh không có hướng
- **Đồ thị có hướng**: Cạnh có hướng
- **Đồ thị có trọng số**: Mỗi cạnh có trọng số

#### Thuật toán cơ bản
- **Dijkstra**: Tìm đường đi ngắn nhất
- **Kruskal**: Tìm cây khung nhỏ nhất
- **DFS/BFS**: Duyệt đồ thị

### Combinatorics

#### Chỉnh hợp
```
A(n,k) = n!/(n-k)!
```

#### Tổ hợp
```
C(n,k) = n!/(k!(n-k)!)
```

#### Nguyên lý bao hàm - loại trừ
```
|A₁ ∪ A₂ ∪ ... ∪ Aₙ| = Σ|Aᵢ| - Σ|Aᵢ ∩ Aⱼ| + ...
```

## Phương pháp số

### Giải phương trình phi tuyến

#### Phương pháp chia đôi
```
f(a)f(b) < 0 ⟹ có nghiệm trong [a,b]
```

#### Phương pháp Newton-Raphson
```
xₙ₊₁ = xₙ - f(xₙ)/f'(xₙ)
```

### Nội suy

#### Nội suy Lagrange
```
P(x) = Σ yᵢ × Πⱼ≠ᵢ (x-xⱼ)/(xᵢ-xⱼ)
```

#### Nội suy Newton
```
P(x) = y₀ + Σ f[x₀,...,xₖ] × Π(x-xⱼ)
```

### Tích phân số

#### Quy tắc hình thang
```
∫[a,b] f(x)dx ≈ (b-a)/2 × [f(a) + f(b)]
```

#### Quy tắc Simpson
```
∫[a,b] f(x)dx ≈ (b-a)/6 × [f(a) + 4f((a+b)/2) + f(b)]
```

## Tối ưu hóa

### Quy hoạch tuyến tính

#### Dạng chuẩn
```
Minimize: c^T x
Subject to: Ax = b, x ≥ 0
```

#### Phương pháp Simplex
1. Tìm nghiệm cơ bản khả thi
2. Kiểm tra tính tối ưu
3. Chuyển đỉnh nếu chưa tối ưu

### Quy hoạch phi tuyến

#### Điều kiện Karush-Kuhn-Tucker (KKT)
Cho bài toán:
```
Minimize f(x)
Subject to: gᵢ(x) ≤ 0, hⱼ(x) = 0
```

Điều kiện KKT:
```
∇f + Σλᵢ∇gᵢ + Σμⱼ∇hⱼ = 0
λᵢgᵢ = 0, λᵢ ≥ 0
```

## Ứng dụng thực tế

### Khoa học dữ liệu
- **Machine Learning**: Regression, Classification
- **Deep Learning**: Neural Networks
- **Data Mining**: Pattern Recognition

### Tài chính
- **Định giá tài sản**: Black-Scholes model
- **Quản lý rủi ro**: Value at Risk
- **Tối ưu hóa portfolio**: Markowitz model

### Kỹ thuật
- **Xử lý tín hiệu**: Fourier Transform
- **Điều khiển**: PID controller
- **Mô phỏng**: Monte Carlo methods

### Sinh học
- **Mô hình dân số**: Logistic growth
- **Epidemiology**: SIR model
- **Bioinformatics**: Sequence alignment

## Công cụ phần mềm

### Ngôn ngữ lập trình
- **Python**: NumPy, SciPy, Pandas
- **R**: Phân tích thống kê
- **MATLAB**: Tính toán khoa học
- **Julia**: High-performance computing

### Phần mềm chuyên dụng
- **Mathematica**: Symbolic computation
- **Maple**: Computer algebra
- **SPSS**: Statistical analysis
- **Excel**: Spreadsheet analysis

## Bài tập thực hành

### Bài 1: Xác suất
Xác suất rút được ít nhất 1 quân K từ bộ bài 52 lá khi rút 5 lá?

### Bài 2: Tối ưu hóa
Tối ưu hóa hàm f(x,y) = x² + y² với ràng buộc x + y = 1.

### Bài 3: Phương pháp số
Tìm nghiệm của phương trình x³ - 2x - 1 = 0 bằng phương pháp Newton.

## Tài liệu tham khảo

- Introduction to Probability - Dimitri P. Bertsekas, John N. Tsitsiklis
- Numerical Analysis - Richard L. Burden, J. Douglas Faires
- Discrete Mathematics - Kenneth H. Rosen
- Convex Optimization - Stephen Boyd, Lieven Vandenberghe
