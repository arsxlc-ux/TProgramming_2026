package main

import (
    "fmt"
    "math"
)

func calculateY(a float64, x float64) float64 {
    logValue := math.Log10(a + x)
    return logValue * logValue / math.Pow(a+x, 2)
}

func main() {
    a := 2.0
    xValues := []float64{1.16, 1.32, 1.47, 1.65, 1.93}
    
    fmt.Printf("%-10s%-10s\n", "x", "y")
    for _, x := range xValues {
        y := calculateY(a, x)
        fmt.Printf("%.2f\t%.6f\n", x, y)
    }
}