<?php

namespace Database\Factories;
use App\Models\Editorial;
use App\Models\Libro;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class LibroFactory extends Factory
{
/**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Libro::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'titulo' => $this->faker->sentence,
            'editorial_id' => Editorial::factory()->create()->id,
            'edicion' => $this->faker->randomDigit,
            'pais' => $this->faker->country,
            'precio' => $this->faker->randomFloat(2, 1, 100),
        ];
    }
}
