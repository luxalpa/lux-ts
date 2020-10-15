function *__iterate(it) {
  let result = it.next$Iterator();
  while(!result.done) {
    yield result.value
    result = it.next$Iterator();
  }
}
