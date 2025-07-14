---
sidebar_position: 1
---

# Giải Tích

Giải tích là nhánh toán học nghiên cứu về sự thay đổi liên tục, giới hạn, đạo hàm và tích phân.

## Các chủ đề chính

### 1. Giải tích một biến
- **Giới hạn và tính liên tục**
- **Đạo hàm và ứng dụng**
- **Tích phân và ứng dụng**
- **Chuỗi số và chuỗi hàm**

### 2. Giải tích nhiều biến
- **Đạo hàm riêng**
- **Tích phân bội**
- **Trường vector**
- **Định lý Green, Stokes, Gauss**

### 3. Giải tích phức
- **Hàm phức**
- **Tích phân phức**
- **Chuỗi Laurent**
- **Định lý residue**

### 4. Phương trình vi phân
- **Phương trình vi phân thường**
- **Phương trình vi phân riêng**
- **Hệ phương trình vi phân**

## Giới hạn

### Định nghĩa
Giới hạn của hàm f(x) khi x tiến về a:
```
lim(x→a) f(x) = L
```

### Quy tắc tính giới hạn
1. **Quy tắc L'Hôpital**: 
   ```
   lim(x→a) f(x)/g(x) = lim(x→a) f'(x)/g'(x)
   ```

2. **Giới hạn cơ bản**:
   ```
   lim(x→0) sin(x)/x = 1
   lim(x→∞) (1 + 1/x)^x = e
   ```

## Đạo hàm

### Định nghĩa
```
f'(x) = lim(h→0) [f(x+h) - f(x)]/h
```

### Quy tắc đạo hàm
- **Quy tắc tích**: (fg)' = f'g + fg'
- **Quy tắc thương**: (f/g)' = (f'g - fg')/g²
- **Quy tắc dây chuyền**: (f(g(x)))' = f'(g(x))·g'(x)

### Đạo hàm cơ bản
```
(x^n)' = nx^(n-1)
(sin x)' = cos x
(cos x)' = -sin x
(e^x)' = e^x
(ln x)' = 1/x
```

## Tích phân

### Tích phân bất định
```
∫ f(x)dx = F(x) + C
```
trong đó F'(x) = f(x).

### Tích phân xác định
```
∫[a to b] f(x)dx = F(b) - F(a)
```

### Các phương pháp tích phân

#### 1. Tích phân từng phần
```
∫ u dv = uv - ∫ v du
```

#### 2. Tích phân đổi biến
```
∫ f(g(x))g'(x)dx = ∫ f(u)du
```
với u = g(x).

#### 3. Tích phân hàm hữu tỷ
Phân tích thành phân số đơn giản.

## Ứng dụng của đạo hàm

### 1. Tìm cực trị
- Điều kiện cần: f'(x) = 0
- Điều kiện đủ: Kiểm tra f''(x)

### 2. Vẽ đồ thị hàm số
- Tính đơn điệu
- Tính lồi, lõm
- Tiệm cận

### 3. Bài toán tối ưu
- Tối ưu hóa chi phí
- Tối ưu hóa lợi nhuận
- Thiết kế tối ưu

## Ứng dụng của tích phân

### 1. Tính diện tích
```
S = ∫[a to b] |f(x)|dx
```

### 2. Tính thể tích
```
V = π∫[a to b] [f(x)]²dx
```

### 3. Tính độ dài cung
```
L = ∫[a to b] √(1 + [f'(x)]²)dx
```

## Chuỗi

### Chuỗi số
```
∑(n=1 to ∞) aₙ = a₁ + a₂ + a₃ + ...
```

### Kiểm tra hội tụ
1. **Tiêu chuẩn tỉ số**: lim|aₙ₊₁/aₙ| < 1
2. **Tiêu chuẩn căn**: lim ⁿ√|aₙ| < 1
3. **Tiêu chuẩn tích phân**: So sánh với tích phân

### Chuỗi Taylor
```
f(x) = ∑(n=0 to ∞) f^(n)(a)/n! · (x-a)ⁿ
```

#### Chuỗi MacLaurin thông dụng
```
e^x = ∑(n=0 to ∞) xⁿ/n!
sin x = ∑(n=0 to ∞) (-1)ⁿ x^(2n+1)/(2n+1)!
cos x = ∑(n=0 to ∞) (-1)ⁿ x^(2n)/(2n)!
```

## Giải tích nhiều biến

### Đạo hàm riêng
```
∂f/∂x = lim(h→0) [f(x+h,y) - f(x,y)]/h
```

### Gradient
```
∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)
```

### Tích phân bội
```
∫∫_D f(x,y) dA
```

## Ứng dụng thực tế

### Vật lý
- Chuyển động: vận tốc, gia tốc
- Điện học: dòng điện, điện áp
- Nhiệt học: truyền nhiệt

### Kinh tế
- Tối ưu hóa lợi nhuận
- Phân tích chi phí biên
- Mô hình tăng trưởng

### Kỹ thuật
- Xử lý tín hiệu
- Điều khiển tự động
- Machine learning

## Bài tập thực hành

### Bài 1: Tính giới hạn
```
lim(x→0) (sin 3x)/(tan 2x)
```

### Bài 2: Tính đạo hàm
```
f(x) = x² sin(3x) + e^(x²)
```

### Bài 3: Tính tích phân
```
∫ x² e^x dx
```

## Tài liệu tham khảo

- Calculus - James Stewart
- Principles of Mathematical Analysis - Walter Rudin
- Advanced Calculus - Patrick M. Fitzpatrick
