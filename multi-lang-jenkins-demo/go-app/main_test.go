package main

import "testing"

func TestHello(t *testing.T) {
    got := Hello()
    want := "Hello from Go!"
    if got != want {
        t.Fatalf("got %q, want %q", got, want)
    }
}
