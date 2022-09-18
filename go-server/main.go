package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

type task struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Priority string `json:"priority"`
}

var data = []task{
	{ID: "1", Name: "Finish work", Priority: "High"},
}
