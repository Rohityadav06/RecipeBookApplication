import { TestBed } from '@angular/core/testing';

import { AddRecipeService } from './add-recipe.service';

describe('AddRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddRecipeService = TestBed.get(AddRecipeService);
    expect(service).toBeTruthy();
  });
});
