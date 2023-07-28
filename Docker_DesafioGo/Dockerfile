FROM golang:alpine as builder
COPY . .
RUN go build hello.go

FROM scratch
COPY --from=builder ./go ./go
CMD [ "./go/hello" ]