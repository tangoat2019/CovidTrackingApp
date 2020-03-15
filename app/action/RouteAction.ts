export const MODIFY_BOOTH = "MODIFY_BOOTH"

export const modifyBooth = (booth: string) => {
  return {
    type: MODIFY_BOOTH,
    payload: {
      booth
    }
  }
}
