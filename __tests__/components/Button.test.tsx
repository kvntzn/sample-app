import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { create } from 'react-test-renderer'
import { Button } from '../../src/components'
import { BUTTON } from '../../src/constants/test_constant'

describe('This is to test functionality of Button Compnent', () => {
  const onPress = jest.fn()
  const testTitle = 'Test'
  const isLoading = false
  it('should return the expected component tree', () => {
    const componentTree = create(
      <Button title={testTitle} onPress={onPress} loading={isLoading} />
    ).toJSON()

    expect(componentTree).toBeDefined()
  })

  it('Button should trigger onPress function when pressed', () => {
    const { getByTestId } = render(
      <Button title={testTitle} onPress={onPress} loading={isLoading} />
    )

    const button = getByTestId(BUTTON)
    fireEvent.press(button)
    expect(onPress).toHaveBeenCalled()
  })
})
