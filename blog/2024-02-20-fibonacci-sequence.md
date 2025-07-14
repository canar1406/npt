---
slug: fibonacci-sequence
title: Dãy Fibonacci - Từ thiên nhiên đến toán học
authors: [euler-fan]
tags: [fibonacci, number-theory, nature]
---

# Dãy Fibonacci: Từ thiên nhiên đến toán học

Dãy Fibonacci là một trong những dãy số nổi tiếng nhất trong toán học, xuất hiện khắp nơi trong thiên nhiên và có nhiều ứng dụng bất ngờ.

## Định nghĩa

Dãy Fibonacci được định nghĩa bởi:
- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) với n ≥ 2

<!--truncate-->

## Dãy số đầu tiên

```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
```

## Tỷ lệ vàng

Tỷ lệ giữa hai số Fibonacci liên tiếp tiến đến tỷ lệ vàng:

$$\lim_{n \to \infty} \frac{F(n+1)}{F(n)} = \phi = \frac{1 + \sqrt{5}}{2} \approx 1.618$$

## Công thức Binet

Số Fibonacci thứ n có thể tính bằng công thức:

$$F(n) = \frac{\phi^n - \psi^n}{\sqrt{5}}$$

trong đó:
- $\phi = \frac{1 + \sqrt{5}}{2}$ (tỷ lệ vàng)
- $\psi = \frac{1 - \sqrt{5}}{2}$

## Trong thiên nhiên

### 1. Hoa hướng dương
Số lượng hạt trong hoa hướng dương thường là số Fibonacci.

### 2. Vỏ ốc
Hình xoắn ốc trong vỏ ốc theo tỷ lệ vàng.

### 3. Cánh hoa
Nhiều loài hoa có số cánh là số Fibonacci: 3, 5, 8, 13, 21, 34.

### 4. Cành cây
Cách sắp xếp lá trên cành cây theo tỷ lệ vàng.

## Tính chất toán học

### 1. Tính chất chia hết
- F(n) chia hết cho F(m) khi n chia hết cho m
- GCD(F(m), F(n)) = F(GCD(m, n))

### 2. Đồng nhất thức Cassini
$$F(n-1) \cdot F(n+1) - F(n)^2 = (-1)^n$$

### 3. Tổng
$$\sum_{i=0}^{n} F(i) = F(n+2) - 1$$

### 4. Tổng bình phương
$$\sum_{i=0}^{n} F(i)^2 = F(n) \cdot F(n+1)$$

## Ứng dụng

### 1. Thuật toán tìm kiếm
Tìm kiếm Fibonacci có độ phức tạp O(log n).

### 2. Phân tích thuật toán
Phân tích độ phức tạp của thuật toán Euclid.

### 3. Thiết kế nghệ thuật
Tỷ lệ vàng được sử dụng trong kiến trúc và nghệ thuật.

### 4. Tài chính
Phân tích kỹ thuật trong thị trường chứng khoán.

## Mở rộng

### 1. Dãy Lucas
$$L(n) = L(n-1) + L(n-2)$$
với L(0) = 2, L(1) = 1

### 2. Dãy Tribonacci
$$T(n) = T(n-1) + T(n-2) + T(n-3)$$

### 3. Dãy Fibonacci tổng quát
$$F_k(n) = F_k(n-1) + F_k(n-2) + ... + F_k(n-k)$$

## Mã nguồn

### Python
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Phiên bản tối ưu
def fibonacci_fast(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

### JavaScript
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Phiên bản tối ưu
function fibonacciFast(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
```

## Bài tập

### Bài 1: Tính Fibonacci
Viết chương trình tính số Fibonacci thứ n với n = 100.

### Bài 2: Tìm kiếm
Tìm tất cả số Fibonacci nhỏ hơn 1000.

### Bài 3: Chứng minh
Chứng minh rằng mọi số tự nhiên đều có thể biểu diễn dưới dạng tổng của các số Fibonacci khác nhau.

## Tài liệu tham khảo

- Donald Knuth - "The Art of Computer Programming"
- Thomas Koshy - "Fibonacci and Lucas Numbers with Applications"
- Ron Knott - "Fibonacci Numbers and the Golden Section"

## Kết luận

Dãy Fibonacci là một ví dụ tuyệt vời về cách toán học kết nối với thiên nhiên. Từ một định nghĩa đơn giản, nó dẫn đến những khám phá sâu sắc về cấu trúc và vẻ đẹp của thế giới xung quanh chúng ta.

*Fibonacci cho chúng ta thấy rằng toán học không chỉ là trừu tượng mà còn là ngôn ngữ của tự nhiên!*
