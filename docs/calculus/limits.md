# Giới hạn và liên tục

Giới hạn là khái niệm cơ bản trong giải tích, mô tả hành vi của hàm số khi biến số tiến gần đến một giá trị.

## Định nghĩa giới hạn

### Giới hạn hàm số
Ta nói hàm số f(x) có giới hạn L khi x tiến đến a, ký hiệu:
```
lim[x→a] f(x) = L
```

### Định nghĩa epsilon-delta (ε-δ)
∀ε > 0, ∃δ > 0 sao cho:
```
|x - a| < δ ⟹ |f(x) - L| < ε
```

## Các loại giới hạn

### 1. Giới hạn hữu hạn
```
lim[x→2] (x² - 1) = 3
```

### 2. Giới hạn vô hạn
```
lim[x→0⁺] 1/x = +∞
```

### 3. Giới hạn ở vô hạn
```
lim[x→∞] 1/x = 0
```

### 4. Giới hạn một bên
- Giới hạn trái: lim[x→a⁻] f(x)
- Giới hạn phải: lim[x→a⁺] f(x)

## Tính chất giới hạn

### Định lý
Nếu lim[x→a] f(x) = L và lim[x→a] g(x) = M, thì:

1. **Tính tuyến tính**: lim[x→a] [f(x) + g(x)] = L + M
2. **Tích**: lim[x→a] [f(x)·g(x)] = L·M
3. **Thương**: lim[x→a] [f(x)/g(x)] = L/M (nếu M ≠ 0)
4. **Hợp**: lim[x→a] [f(g(x))] = f(lim[x→a] g(x))

## Các dạng bất định

### 1. Dạng 0/0
```
lim[x→0] sin(x)/x = 1
```

### 2. Dạng ∞/∞
```
lim[x→∞] (3x² + 2x)/(x² - 1) = 3
```

### 3. Dạng 0·∞
```
lim[x→0⁺] x·ln(x) = 0
```

### 4. Dạng ∞ - ∞
```
lim[x→∞] (√(x² + 1) - x) = 0
```

## Quy tắc L'Hôpital

Nếu lim[x→a] f(x) = lim[x→a] g(x) = 0 hoặc ±∞, thì:
```
lim[x→a] f(x)/g(x) = lim[x→a] f'(x)/g'(x)
```

### Ví dụ
```
lim[x→0] sin(x)/x = lim[x→0] cos(x)/1 = 1
```

## Tính liên tục

### Định nghĩa
Hàm số f(x) liên tục tại điểm a nếu:
1. f(a) tồn tại
2. lim[x→a] f(x) tồn tại
3. lim[x→a] f(x) = f(a)

### Các loại gián đoạn

#### 1. Gián đoạn khử được
```
f(x) = (x² - 1)/(x - 1) tại x = 1
```

#### 2. Gián đoạn nhảy
```
f(x) = {x    nếu x < 0
       {x+1  nếu x ≥ 0
```

#### 3. Gián đoạn vô hạn
```
f(x) = 1/x tại x = 0
```

## Định lý về hàm liên tục

### 1. Định lý giá trị trung gian
Nếu f liên tục trên [a,b] và f(a) < k < f(b), thì tồn tại c ∈ (a,b) sao cho f(c) = k.

### 2. Định lý Weierstrass
Hàm liên tục trên đoạn đóng bị chặn đạt giá trị lớn nhất và nhỏ nhất.

### 3. Định lý Bolzano
Nếu f liên tục trên [a,b] và f(a)·f(b) < 0, thì tồn tại c ∈ (a,b) sao cho f(c) = 0.

## Giới hạn quan trọng

### 1. Giới hạn lượng giác
```
lim[x→0] sin(x)/x = 1
lim[x→0] (1 - cos(x))/x² = 1/2
```

### 2. Giới hạn mũ
```
lim[x→0] (e^x - 1)/x = 1
lim[x→∞] (1 + 1/x)^x = e
```

### 3. Giới hạn logarit
```
lim[x→0] ln(1 + x)/x = 1
```

## Bài tập

### Bài 1: Tính giới hạn
```
lim[x→2] (x² - 4)/(x - 2)
```

### Bài 2: Kiểm tra tính liên tục
```
f(x) = {x²      nếu x < 1
       {2x - 1  nếu x ≥ 1
```
Kiểm tra tính liên tục tại x = 1.

### Bài 3: Áp dụng L'Hôpital
```
lim[x→0] (e^x - 1 - x)/x²
```

## Ứng dụng

### 1. Vật lý
- Vận tốc tức thời
- Gia tốc
- Dòng điện

### 2. Kỹ thuật
- Phân tích ổn định
- Hệ thống điều khiển
- Xử lý tín hiệu

### 3. Kinh tế
- Tối ưu hóa
- Mô hình tăng trưởng
- Phân tích biên

## Tài liệu tham khảo

- James Stewart - "Calculus: Early Transcendentals"
- Tom M. Apostol - "Mathematical Analysis"
- Walter Rudin - "Principles of Mathematical Analysis"

*Giới hạn và liên tục là nền tảng của toàn bộ giải tích!*
